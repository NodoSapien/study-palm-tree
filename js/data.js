const mallaData = [
    { sem: 1, stats: {ht:8, hp:8, hl:3, uc:25}, items: [
        { id:1, name:"ÁLGEBRA Y TRIGONOMETRÍA", type:"bg-blue", tax:"FI", uc:5, req:[] },
        { id:2, name:"PRINCIPIOS DE MARKETING", type:"bg-teal", tax:"FG", uc:5, req:[] },
        null,
        { id:3, name:"LÓGICA", type:"bg-green", tax:"CC", uc:4, req:[] },
        { id:4, name:"FUNDAMENTOS DE PROGRAMACIÓN", type:"bg-green", tax:"CC", uc:3, req:[] },
        { id:5, name:"COMPETENCIA TEXTUAL EN ESPAÑOL", type:"bg-yellow", tax:"IN", uc:5, req:[] },
        { id:6, name:"IDENTIDAD, LIDERAZGO Y COMPROMISO I", type:"bg-yellow", tax:"IN", uc:3, req:[] }
    ]},
    { sem: 2, stats: {ht:9, hp:12, hl:5, uc:31}, items: [
        { id:7, name:"CÁLCULO DIFERENCIAL", type:"bg-blue", tax:"FI", uc:6, req:[1] },
        { id:8, name:"ÁLGEBRA LINEAL", type:"bg-blue", tax:"FI", uc:6, req:[1] },
        null,
        { id:9, name:"MATEMÁTICAS DISCRETAS", type:"bg-green", tax:"CC", uc:6, req:[3] },
        { id:10, name:"ALGORITMOS Y PROGRAMACIÓN", type:"bg-green", tax:"CC", uc:3, req:[4] },
        { id:11, name:"ALGORITMOS Y ESTRUCTURAS DE DATOS", type:"bg-green", tax:"CC", uc:7, req:[4] },
        { id:12, name:"IDENTIDAD, LIDERAZGO Y COMPROMISO II", type:"bg-yellow", tax:"IN", uc:3, req:[6] }
    ]},
    { sem: 3, stats: {ht:12, hp:12, hl:2, uc:33}, items: [
        { id:13, name:"CÁLCULO INTEGRAL", type:"bg-blue", tax:"FI", uc:5, req:[7] },
        { id:14, name:"FÍSICA GENERAL", type:"bg-blue", tax:"FI", uc:6, req:[7] },
        { id:15, name:"CONTABILIDAD FINANCIERA", type:"bg-teal", tax:"FG", uc:5, req:[] },
        { id:16, name:"ECOLOGÍA, AMBIENTE Y SUSTENTABILIDAD", type:"bg-yellow", tax:"IN", uc:3, req:[] },
        { id:17, name:"PROGRAMACIÓN ORIENTADA A OBJETOS", type:"bg-green", tax:"CC", uc:7, req:[10] },
        { id:18, name:"SISTEMAS DE INFORMACIÓN", type:"bg-magenta", tax:"IS", uc:4, req:[] },
        { id:19, name:"INNOVACIÓN Y EMPRENDIMIENTO", type:"bg-yellow", tax:"IN", uc:3, req:[] }
    ]},
    { sem: 4, stats: {ht:12, hp:10, hl:3, uc:31}, items: [
        { id:20, name:"CÁLCULO VECTORIAL", type:"bg-blue", tax:"FI", uc:5, req:[13] },
        { id:21, name:"ECUACIONES DIFERENCIALES ORDINARIAS", type:"bg-blue", tax:"FI", uc:4, req:[13] },
        { id:22, name:"INGENIERÍA ECONÓMICA", type:"bg-teal", tax:"FG", uc:4, req:[15] },
        { id:23, name:"ORGANIZACIÓN DEL COMPUTADOR", type:"bg-orange", tax:"TE", uc:5, req:[] },
        { id:24, name:"PROGRAMACIÓN ORIENTADA A LA WEB", type:"bg-green", tax:"CC", uc:3, req:[17] },
        { id:25, name:"INGENIERÍA DE SOFTWARE", type:"bg-magenta", tax:"IS", uc:5, req:[18] },
        { id:26, name:"INTERACCIÓN HUMANO-COMPUTADOR", type:"bg-magenta", tax:"IS", uc:5, req:[] }
    ]},
    { sem: 5, stats: {ht:10, hp:11, hl:5, uc:31}, items: [
        { id:27, name:"PROBABILIDAD Y ESTADÍSTICA", type:"bg-teal", tax:"FG", uc:5, req:[20] },
        { id:28, name:"ELECTRICIDAD Y MAGNETISMO", type:"bg-blue", tax:"FI", uc:6, req:[14] },
        { id:29, name:"LABORATORIO DE FÍSICA", type:"bg-blue", tax:"FI", uc:2, req:[14] },
        { id:30, name:"SISTEMAS OPERATIVOS", type:"bg-orange", tax:"TE", uc:5, req:[23] },
        { id:31, name:"TÓPICOS ESPECIALES DE PROGRAMACIÓN", type:"bg-green", tax:"CC", uc:3, req:[24] },
        { id:32, name:"GESTIÓN DE PROYECTOS DE SOFTWARE", type:"bg-magenta", tax:"IS", uc:4, req:[25] },
        { id:33, name:"SISTEMAS DE BASES DE DATOS", type:"bg-magenta", tax:"IS", uc:6, req:[18] },
    ]},
    { sem: 6, stats: {ht:11, hp:8, hl:6, uc:31}, items: [
        { id:34, name:"MÉTODOS NUMÉRICOS", type:"bg-blue", tax:"FI", uc:2, req:[21, 27] },
        { id:35, name:"ARQUITECTURA DEL COMPUTADOR APLICADA", type:"bg-orange", tax:"TE", uc:7, req:[30] },
        { id:36, name:"INGLÉS I", type:"bg-yellow", tax:"IN", uc:4, req:[] },
        { id:37, name:"REDES DE COMUNICACIÓN DE DATOS", type:"bg-orange", tax:"TE", uc:6, req:[30] },
        { id:38, name:"ASEGURAMIENTO DE LA CALIDAD DEL SW", type:"bg-magenta", tax:"IS", uc:4, req:[25] },
        { id:39, name:"INGENIERÍA DE REQUISITOS", type:"bg-magenta", tax:"IS", uc:4, req:[25] },
        { id:40, name:"TÓPICOS ESPECIALES PARA GESTIÓN DE DATOS", type:"bg-magenta", tax:"IS", uc:4, req:[33] }
    ]},
    { sem: 7, stats: {ht:9, hp:5, hl:11, uc:30}, items: [
        { id:41, name:"INVESTIGACIÓN DE OPERACIONES", type:"bg-teal", tax:"FG", uc:5, req:[27] },
        { id:42, name:"INTELIGENCIA ARTIFICIAL Y MACHINE LEARNING", type:"bg-green", tax:"CC", uc:4, req:[27, 10] },
        { id:43, name:"INGLÉS II", type:"bg-yellow", tax:"IN", uc:4, req:[36] },
        { id:44, name:"CIBERSEGURIDAD", type:"bg-orange", tax:"TE", uc:5, req:[37] },
        { id:45, name:"INTELIGENCIA DE NEGOCIOS", type:"bg-magenta", tax:"IS", uc:3, req:[33] },
        { id:46, name:"DESARROLLO DE SOFTWARE", type:"bg-magenta", tax:"IS", uc:5, req:[25] },
        { id:47, name:"ELECTIVA INFO I", type:"bg-purple", tax:"EL", uc:4, req:[] }
    ]},
    { sem: 8, stats: {ht:12, hp:9, hl:0, uc:28}, items: [
        { id:48, name:"EVALUACIÓN DE SISTEMAS INFORMÁTICOS", type:"bg-teal", tax:"FG", uc:4, req:[] },
        { id:49, name:"ÉTICA PROFESIONAL", type:"bg-yellow", tax:"IN", uc:3, req:[] },
        { id:50, name:"INGLÉS TÉCNICO", type:"bg-yellow", tax:"IN", uc:4, req:[43] },
        { id:51, name:"COMPUTACIÓN EN LA NUBE", type:"bg-orange", tax:"TE", uc:5, req:[37] },
        { id:52, name:"ARQUITECTURAS EMPRESARIALES", type:"bg-magenta", tax:"IS", uc:4, req:[] },
        { id:53, name:"ELECTIVA COMPLEMENTARIA", type:"bg-purple", tax:"EL", uc:4, req:[] },
        { id:54, name:"ELECTIVA INFO II", type:"bg-purple", tax:"EL", uc:4, req:[] }
    ]},
    { sem: 9, stats: {ht:0, hp:0, hl:0, uc:25}, items: [
        { id:55, name:"SERVICIO COMUNITARIO", type:"", tax:"SC", uc:0, req:[] },
        { id:56, name:"PASANTÍA", type:"bg-magenta", tax:"PP", uc:4, req:[] },
        { id:57, name:"TRABAJO DE GRADO", type:"bg-magenta", tax:"PP", uc:21, req:[] }
    ]}
];
