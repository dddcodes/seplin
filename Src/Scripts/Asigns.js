
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
    ["qui", "Química"],
    ["ecs", "Ecosistemas"]
];

function completeAsignatureName(abbrev){
    for(let i= 0; i < asignatureList.length; i++){
        e = asignatureList[i];
        if(e[0] === abbrev){
            return e[1]
        }
    }
};

function fillAsignSelectInput(input) {

    input.innerHTML = `
    <option value="">Random</option>`;

    for (let i = 0; i < asignatureList.length; i++) {
        const e = asignatureList[i];
    
        input.innerHTML += `<option value="${e[0]}">${e[1]}</option>`;
    }

}

fillAsignSelectInput(cat1FilterInput)
fillAsignSelectInput(editCat1Input)
fillAsignSelectInput(cat1Input)