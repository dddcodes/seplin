function img(src) {
    return `<br /><img src='${src}'/><br />`;
}

const questList = [
    {id: `0`,question: `cuando NACIO ADOLF HITLER?`, 
        answer: `20 de abril de 1889`,
        incorrectAnswer: [
            "20 de enero de 1889", 
            "20 de abril de 1880", 
            "10 de abril de 1899", 
            "20 de diciembre de 1888"], 
        cat1: `his`,
        cat2: 1,
        ex: `Adolf Hitler nacio el 20 de abril de 1889 (18-89) ${img("https://www.biografiasyvidas.com/biografia/h/fotos/hitler_adolf_1.jpg")}`
    },
    {id: '1',question: `quien escribio la ley de la conservacion de la materia?`, 
        answer: `Anton Lavoiser`,
        incorrectAnswer: [
            "Ant lavoiser", 
            "Anton laviser", 
            "Anton lavor", 
            "Anton iser"
        ],
        cat1: `qui`,
        cat2: 1, //month
        ex: `La ley de conservacion de la materia fue escrita en 1785 por Anton Lavoiser. ${img('https://pbs.twimg.com/media/ENTuNRXXkAA9MXs.jpg')} 
            Esta dice "La masa no se crea ni se destruye, sólo se transforma”.`
    },
    {id: '2',question: `que dice la ley de conservacion?`, 
    answer: `la materia no se crea ni se destruye, solo se transforma`,
    incorrectAnswer: [
        "la materia se crea y se puede destruir", 
        "las cosas no se crean y no transforman", 
        "la materia no se crea ni se transforma, solo se destruye"
    ],
    cat1: `qui`,
    cat2: 1, //month
    ex: `la materia no puede ser creada ni destruida, solo puede transformarse ${img('https://pbs.twimg.com/media/ENTuNRXXkAA9MXs.jpg')}`
    },
    {id: '3',question: `a que se refiere con "SINTESIS"?`, 
        answer: `union de dos cosas`,
        incorrectAnswer: [
            "union matrimonial", 
            "union de una cosa", 
            "cosas de una union nacional", 
            "union inter nacional"
        ],
        cat1: `qui`,
        cat2: 1, //month
        ex: `"dos moleculas distintas hicieron sintesis para formar una diferente"...se refiere a que se unieron dos moleculas diferentes para formar una con una misma estructura diferente. ${img("https://www.ejemplos.co/wp-content/uploads/2016/10/moleculas-ilustracion-3d-min-e1477328151177.jpg")}`
    },
    {id: '4',question: `que son los bioelementos primarios? (conocidos tambien como CHONPS)`, 
        answer: `elementos quimicos que pueden formar vida`,
        incorrectAnswer: [
            "elementos nacionales que no forman nada", 
            "elementos quimicos que son fisicos ", 
            "quimicos inorganicos", 
            "elementos"
        ],
        cat1: `quim`,
        cat2: 1, //month
        ex: `Los bioelementos son elementos quimicos que pueden formar vida, 
            conocidos como CHONPS, los bioelementos son: Carbon, Hidrogeno, Oxigeno, Nitrogeno, Fosforo y Azufre 
            ${img('http://biogeologia4eso.weebly.com/uploads/4/5/8/0/4580795/5565598_orig.jpg')}`
    },
    {id: '5',question: `a que se refiere con 'AISLACION' ?`, 
        answer: `separar/aislar un fragmento de otro`,
        incorrectAnswer: [
            "juntar dos elementos", 
            "sintesis", 
            "separar un objeto de un quimico", 
            "separar cualquier cosa de alguien"
        ],
        cat1: `qui`,
        cat2: 1, //month
        ex: `"se requiere aislar esta pelota de este perro"... se refiere a que se debe de tener aislada (separada) la pelota del perro 
            ${img('http://www.cienciamx.com/images/aic/ciencia/quimica/Equipo_de_laboratorio.png')}`
    },
    {id: '6',question: `selecciona los que son bioelementos (CHONPS)`, 
        answer: `Carbon Hidrogeno Oxigeno - Nitrogeno Fosforo Azufre`,
        incorrectAnswer: [
            `Carbon Hidrogeno Oxigeno - Aemono Fosforo Azufre `, 
            "Carbon Hidrogeno oxigeno - nitrogeno plutonio", 
            "hidrogeno oxigeno carbon - mercurio metal"
        ],
        cat1: `quim`,
        cat2: 1, //month
        ex: `C: Carbon  ...  
            H: Hidrogeno <br />
            O: Oxigeno  ...  
            N: Nitrogeno <br />
            P: Fosforo  ...  
            S: Azufre 
            ${img('https://i0.wp.com/divulgando-ciencia.blog/wp-content/uploads/2020/06/CHONP-V2S-1.jpg?fit=856%2C473&ssl=1')}`
    },
    {id: '7',question: `CUANDO se crearon las LEYES DE REFORMA ? `, 
        answer: `7 de JULIO de 18-59`,
        incorrectAnswer: [
            "7 de SEPTIEMBRE de 18-19", 
            "7 de JUNIO de 18-58", 
            "7 de JULIO de 19-59"
        ],
        cat1: `his`,
        cat2: 1, //month
        ex: `Las leyes de reforma fueron creadas en el puerto de VERACRUZ, en el 7 de JULIO de 18-59 (despues de la revolucion de AYUTLA) por Benito Juarez`
    },
    {id: '8',question: `QUE presidente creo las conocidas LEYES DE REFORMA ?`, 
        answer: `Benito Juarez`,
        incorrectAnswer: [
            "Benito Jesus", 
            "Jesus de Benito", 
            "Juarez de jesus"
        ],
        cat1: `his`,
        cat2: 1, //month
        ex: `El 7 de julio de 1859, en el puerto de Veracruz, el presidente Benito Juárez presento al pais las LEYES DE REFORMA.`
    },
    {id: '9',question: `CUANDO estallo la REVOLUCION de mexico ? `, 
        answer: `16 de SEPTIEMBRE de 18-10`,
        incorrectAnswer: [
            "18 de SEPTIEMBRE de 19-10", 
            "7 de SEPTIEMBRE de 19-19", 
            "16 de SEPTIEMBRE de 18-11"
        ],
        cat1: `his`,
        cat2: 1, //month
        ex: `El 16 de SEPTIEMBRE de 1810 estalló una REVOLUCION social de la cual nacería nuestro país como una Nación independiente, libre y soberana.`
    },
    {id: '10',question: `CUANDO FUE la INDEPENDENCIA de Mexico ?`, 
        answer: `27 de SEPTIEMBRE de 18-21`,
        incorrectAnswer: [
            "7 de SEPTIEMBRE de 19-21", 
            "20 de SEPTIEMBRE de 18-21", 
            "27 de SEPTIEMBRE de 19-11"
        ],
        cat1: `his`,
        cat2: 1, //month
        ex: `El 27 de septiembre de 1821 culminó la Independencia de México, después de una guerra de once años que fue una gran revolución popular para librarse del dominio español.`
    },
    {id: '11',question: `selecciona:  3 tipos de TRIANGULOS segun sus LADOS`, 
        answer: `Equilátero , Isósceles y Escaleno`,
        incorrectAnswer: [
            "Equileteru , Isósceles y Escaleno", 
            "Equilátero , Isóscel y Escalen", 
            "Equilátero y Escaleno"
        ],
        cat1: `mat`,
        cat2: 1, //month
        ex: `Equilátero <br /> Isósceles <br /> y Escaleno ${img('https://www.proferecursos.com/wp-content/uploads/Tipos-de-Triangulos.jpg')}`
    },
    {id: '12',question: `selecciona: 3 tipos de TRIANGULOS segun sus ANGULOS`, 
        answer: `acutángulo, rectángulo y obtusángulo`,
        incorrectAnswer: [
            "acutungalo, rectángulo y obtusán", 
            "acutángulo y obtusángulo", 
            "acutángulo, rectángulo y obstacusán"
        ],
        cat1: `mat`, //asign
        cat2: 1, //month
        ex: `${img('https://www.proferecursos.com/wp-content/uploads/Tipos-de-Triangulos.jpg')}`
    },
    {id: '13',question: `a que se refiere con "TILDE" (pronunciar mas alto una vocal)`, 
            answer: `acento ortografico`,
            incorrectAnswer: [
                "ortografia", 
                "acento filosofal", 
                "acento regional"
            ],
            cat1: `esp`, //asign
            cat2: 1, //month
            ex: `Signo gráfico que se escribe sobre una letra según la ortografía particular de cada lengua para indicar la mayor intensidad en la pronunciación de la sílaba`
    },
    {id: '14',question: `en que CONSISTEN las LEYES de REFORMA ? <br /> fueron un conjunto de normas con el fin de...`, 
            answer: `separar a la Iglesia del Estado`,
            incorrectAnswer: [
                "reunir a la Iglesia del Estado", 
                "separar al comercio del Estado", 
                "separar a la Iglesia del mundo"
            ],
            cat1: `his`, //asign
            cat2: 1, //month
            ex: `Las Leyes de Reforma fueron un conjunto de normas promulgadas después de la Revolución de Ayutla con el fin de separar a la Iglesia del Estado. 
                <br /> Se trataba de una serie de normas proclamadas después del triunfo de la Revolución de Ayutla.  ${img('')}`
    },
    {id: '15',question: `CUANDO nacio el VOLEYBALL ?`, 
            answer: `18-95`,
            incorrectAnswer: [
                "19-85", 
                "19-75", 
                "18-54"
            ],
            cat1: `ef`, //asign
            cat2: 1, //month
            ex: `en la universidad de YMCA de massachusetts invento el voleyball, en el ano de 18-95`
    },
    {id: '16',question: `QUIEN invento el VOLEYBALL`, 
            answer: `William S.Morgan`,
            incorrectAnswer: [
                "William A.Morgan", 
                "Willy S.Morgan", 
                "William S.Vergan"
            ],
            cat1: `ef`, //asign
            cat2: 1, //month
            ex: `en la universidad de YMCA de massachusetts invento el voleyball, en el ano de 18-95`
    },
    {id: '17',question: `en que UNIVERSIDAD se invento el VOLEYBALL`, 
            answer: `YMCA de Massachusetts`,
            incorrectAnswer: [
                "YNCA de Masachusetts", 
                "YMCA de Masachusets", 
                "YMCU de massachusetts"
            ],
            cat1: `ef`, //asign
            cat2: 1, //month
            ex: `en la universidad de YMCA de massachusetts invento el voleyball, en el ano de 18-95`
    },
    {id: '18',question: `CUALES fueron las ENFERMEDADES que los conquistadores trajeron la mexico? peste negra, influenza...`, 
            answer: `Gripe - varicela`,
            incorrectAnswer: [
                "Gripe - viruela del mono", 
                "Gripe - varicela - peste", 
                "Gripa - viruela"
            ],
            cat1: `his`, //asign
            cat2: 1, //month
            ex: `Estas enfermedades nuevas <br />(influenza, viruela, gripe, sarampión, varicela, peste bubónica, etc.) <br />se sumaron a otras endémicas que ya padecían ellos, como la sífilis, la tuberculosis o la disentería.`
    },
    {id: '19',question: `selecciona el ACENTO que se ESCUCHA pero no se ESCRIBE`, 
            answer: `proso-dico`,
            incorrectAnswer: [
                "tilde", 
                "diacri-tico", 
                "Enfa-tico"
            ],
            cat1: `esp`, //asign
            cat2: 1, //month
            ex: `Tilde/ortografico: pronunciar mas alto la vocal. <br />
                Prosodico: Se ESCUCHA pero no se ESCRIBE. <br />
                Diacritico: DIFERENCIA palabras SIMILARES <br />
                Enfatico: Para PREGUNTAS directas e indirectas`
    },
    {id: '20',question: `selecciona el ACENTO que DIFERENCIA palabras SIMILARES`, 
            answer: `diacri-tico`,
            incorrectAnswer: [
                "tilde", 
                "proso-dico", 
                "Enfa-tico"
            ],
            cat1: `esp`, //asign
            cat2: 1, //month
            ex: `Tilde/ortografico: pronunciar mas alto la vocal. <br />
                Prosodico: Se ESCUCHA pero no se ESCRIBE. <br />
                Diacritico: DIFERENCIA palabras SIMILARES <br />
                Enfatico: Para PREGUNTAS directas e indirectas`
    },
    {id: '21',question: `selecciona el ACENTO que se es para PREGUNTAS directas e indirectas`, 
            answer: `Enfa-tico`,
            incorrectAnswer: [
                "Tilde", 
                "Diacri-tico", 
                "proso-dico"
            ],
            cat1: `esp`, //asign
            cat2: 1, //month
            ex: `Tilde/ortografico: pronunciar mas alto la vocal. <br />
                Prosodico: Se ESCUCHA pero no se ESCRIBE. <br />
                Diacritico: DIFERENCIA palabras SIMILARES <br />
                Enfatico: Para PREGUNTAS directas e indirectas`
    },
    {id: '22',question: `estado de AGREGACION del cual:<br /> El solido pasa a Liquido`, 
            answer: `Fusion`,
            incorrectAnswer: [
                "solidificacion", 
                "vaporizacion", 
                "ionizacion"
            ],
            cat1: `qui`, //asign
            cat2: 1, //month
            ex: `${img('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Phase_change_-_es.svg/640px-Phase_change_-_es.svg.png')}`
    },
    {id: '23',question: `estado de AGREGACION del cual:<br /> El Liquido pasa a solido`, 
            answer: `solidificacion`,
            incorrectAnswer: [
                "fusion", 
                "vaporizacion", 
                "deposicion"
            ],
            cat1: `qui`, //asign
            cat2: 1, //month
            ex: `${img('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Phase_change_-_es.svg/640px-Phase_change_-_es.svg.png')}`
    },
    {id: '24',question: `estado de AGREGACION del cual:<br /> El Solido pasa a Gas`, 
            answer: `sublimacion`,
            incorrectAnswer: [
                "fusion", 
                "vaporizacion", 
                "deposicion"
            ],
            cat1: `qui`, //asign
            cat2: 1, //month
            ex: `${img('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Phase_change_-_es.svg/640px-Phase_change_-_es.svg.png')}`
    },
    {id: '25',question: `estado de AGREGACION del cual:<br /> El Gas pasa a Solido`, 
            answer: `deposicion`,
            incorrectAnswer: [
                "condensacion", 
                "vaporizacion", 
                "ionizacion"
            ],
            cat1: `qui`, //asign
            cat2: 1, //month
            ex: `${img('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Phase_change_-_es.svg/640px-Phase_change_-_es.svg.png')}`
    },
    {id: '26',question: `estado de AGREGACION del cual:<br /> El Liquido pasa a Gas`, 
            answer: `vaporizacion`,
            incorrectAnswer: [
                "sublimacion", 
                "condensacion", 
                "deposicion"
            ],
            cat1: `qui`, //asign
            cat2: 1, //month
            ex: `${img('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Phase_change_-_es.svg/640px-Phase_change_-_es.svg.png')}`
    },
    {id: '27',question: `estado de AGREGACION del cual:<br /> El Gas pasa a Liquido`, 
            answer: `condensacion`,
            incorrectAnswer: [
                "fusion", 
                "vaporizacion", 
                "deposicion"
            ],
            cat1: `qui`, //asign
            cat2: 1, //month
            ex: `${img('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Phase_change_-_es.svg/640px-Phase_change_-_es.svg.png')}`
    },
    
];

/* MODELO:

{id: '',question: `text`, 
        answer: `r`,
        incorrectAnswer: [
            "r1", 
            "r2", 
            "r3"
        ],
        cat1: ``, //asign
        cat2: 1, //month
        ex: `text ${img('')}`
},

*/