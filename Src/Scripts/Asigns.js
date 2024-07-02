
/*ASIGNATURES*/

let asignatureList = [
    ["eng", "Inglés"],
    ["his","Historia"],
    ["tec","Tecnología"],
    ["ef","Deportes"],
    ["tlr", "Lectura y Redacción"],
    ["hum","Humanidades"],
    ["lyc","Lengua y Comunicación"],
    ["fis", "Física"],
    ["cs", "Ciencias Sociales"],
    ["ac", "Acompañamiento Académico"],
    ["eco", "Economía"],
    ["qui", "Química"]
];

function completeAsignatureName(abbrev){
    for(let i= 0; i < asignatureList.length; i++){
        e = asignatureList[i];

        if(e[0] === abbrev){
            return e[1]
        }
    }
};