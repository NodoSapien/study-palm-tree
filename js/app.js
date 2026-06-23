let progress = JSON.parse(localStorage.getItem('ucabProgressV4')) || {};
let currentEditId = null;

function init() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';

    mallaData.forEach(colData => {
        const col = document.createElement('div');
        col.className = 'semester-col';

        col.innerHTML = `
            <div class="sem-header">
                <div class="sem-title">0${colData.sem} SEMESTRE</div>
                <div class="sem-stats">
                    <div class="stat-box"><span class="stat-val">${colData.stats.ht}</span> HT</div>
                    <div class="stat-box"><span class="stat-val">${colData.stats.hp}</span> HP</div>
                    <div class="stat-box"><span class="stat-val">${colData.stats.hl}</span> HL</div>
                </div>
                <div class="sem-stats" style="border-top:1px solid #e0e0e0">
                    <div class="stat-box" style="flex:2">UC ACUM</div>
                    <div class="stat-box" style="flex:1; background:#f0f0f0">${colData.stats.uc}</div>
                </div>
            </div>
        `;

        colData.items.forEach(item => {
            if(item === null) {
                const spacer = document.createElement('div');
                spacer.className = 'spacer';
                col.appendChild(spacer);
            } else {
                const data = progress[item.id] || { status: 'pendiente' };
                const card = document.createElement('div');
                card.className = `subject ${item.type} ${data.status}`;
                card.id = `sub-${item.id}`;

                let badge = '';
                if(data.status === 'aprobada') badge = '✅';
                else if(data.status === 'cursando') badge = '📚';
                else if(data.status === 'reprobada') badge = '❌';

                card.innerHTML = `
                    ${badge ? `<span class="status-badge">${badge}</span>` : ''}
                    <div class="sub-name">${item.name}</div>
                    <div class="sub-data">
                        <div class="d-row">
                            <div class="d-cell">2</div><div class="d-cell">2</div><div class="d-cell">0</div><div class="d-cell">${item.tax}</div>
                        </div>
                        <div class="d-row">
                            <div class="d-cell">4</div><div class="d-cell">6</div><div class="d-cell">12</div><div class="d-cell" style="font-weight:bold">${item.uc}</div>
                        </div>
                    </div>
                `;

                card.onclick = () => toggleApproved(item.id);
                card.oncontextmenu = (e) => {
                    e.preventDefault();
                    openModal(item.id, item.name, item.uc, item.tax);
                };

                col.appendChild(card);
            }
        });
        grid.appendChild(col);
    });

    updateStats();
    setTimeout(drawArrows, 200);
}

function toggleApproved(id) {
    const current = progress[id] || { status: 'pendiente' };
    const newStatus = current.status === 'aprobada' ? 'pendiente' : 'aprobada';

    progress[id] = {
        ...current,
        status: newStatus
    };

    saveProgress();
    init();
}

function openModal(id, name, uc, tax) {
    currentEditId = id;
    const data = progress[id] || { status: 'pendiente', grade: '', prof: '', period: '', notes: '' };

    document.getElementById('m-title').textContent = name;
    document.getElementById('m-meta').textContent = `${uc} UC • ${tax}`;
    document.getElementById('m-status').value = data.status;
    document.getElementById('m-grade').value = data.grade || '';
    document.getElementById('m-prof').value = data.prof || '';
    document.getElementById('m-period').value = data.period || '';
    document.getElementById('m-notes').value = data.notes || '';

    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    currentEditId = null;
}

function saveFromModal() {
    if(!currentEditId) return;

    progress[currentEditId] = {
        status: document.getElementById('m-status').value,
        grade: document.getElementById('m-grade').value,
        prof: document.getElementById('m-prof').value,
        period: document.getElementById('m-period').value,
        notes: document.getElementById('m-notes').value
    };

    saveProgress();
    init();
    closeModal();
}

function saveProgress() {
    localStorage.setItem('ucabProgressV4', JSON.stringify(progress));
}

function updateStats() {
    let aprobadas = 0, cursando = 0, reprobadas = 0;
    let ucAprobadas = 0;
    let sumGrades = 0, countGrades = 0;

    mallaData.forEach(sem => {
        sem.items.forEach(item => {
            if(!item) return;
            const data = progress[item.id];

            if(data?.status === 'aprobada') {
                aprobadas++;
                ucAprobadas += item.uc;
                if(data.grade) {
                    const grade = parseFloat(data.grade);
                    if(!isNaN(grade)) {
                        sumGrades += grade;
                        countGrades++;
                    }
                }
            }
            if(data?.status === 'cursando') cursando++;
            if(data?.status === 'reprobada') reprobadas++;
        });
    });

    const totalItems = mallaData.reduce((sum, sem) =>
        sum + sem.items.filter(i => i !== null).length, 0);
    const progreso = Math.round((aprobadas / totalItems) * 100);
    const indice = countGrades > 0 ? (sumGrades / countGrades).toFixed(2) : '0.00';

    document.getElementById('stat-aprobadas').textContent = aprobadas;
    document.getElementById('stat-uc').textContent = `${ucAprobadas}/240`;
    document.getElementById('stat-cursando').textContent = cursando;
    document.getElementById('stat-indice').textContent = indice;
    document.getElementById('stat-progreso').textContent = `${progreso}%`;
}

function drawArrows() {
    const canvas = document.getElementById('connections');
    const container = document.getElementById('grid-container');

    canvas.width = container.scrollWidth;
    canvas.height = container.scrollHeight;
    const ctx = canvas.getContext('2d');
    const rectC = container.getBoundingClientRect();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mallaData.forEach(col => {
        col.items.forEach(item => {
            if(item && item.req.length > 0) {
                const elTo = document.getElementById(`sub-${item.id}`);
                if(!elTo) return;

                const rTo = elTo.getBoundingClientRect();
                const xTo = rTo.left - rectC.left;
                const yTo = rTo.top + rTo.height/2 - rectC.top;

                item.req.forEach(reqId => {
                    const elFrom = document.getElementById(`sub-${reqId}`);
                    if(!elFrom) return;

                    const rFrom = elFrom.getBoundingClientRect();
                    const xFrom = rFrom.right - rectC.left;
                    const yFrom = rFrom.top + rFrom.height/2 - rectC.top;

                    ctx.beginPath();
                    ctx.strokeStyle = '#bbb';
                    ctx.lineWidth = 2;

                    const midX = xFrom + (xTo - xFrom) / 2;

                    ctx.moveTo(xFrom, yFrom);
                    ctx.lineTo(midX, yFrom);
                    ctx.lineTo(midX, yTo);
                    ctx.lineTo(xTo, yTo);
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.fillStyle = '#bbb';
                    ctx.moveTo(xTo, yTo);
                    ctx.lineTo(xTo - 6, yTo - 3);
                    ctx.lineTo(xTo - 6, yTo + 3);
                    ctx.fill();
                });
            }
        });
    });
}

window.onresize = drawArrows;
window.onclick = (e) => { if(e.target.id === 'modal') closeModal(); };

init();
