
/*FUNCTIONS RELATIONATED WITH QUIZ PARTIALS, AND THE LIST OF THEM*/

const partialList = [
    "Semestre 3 - Parcial I", 
    "Semestre 3 - Parcial II", 
    "Semestre 3 - Parcial III",
    "Semestre 4 - Parcial I", 
    "Semestre 4 - Parcial II", 
    "Semestre 4 - Parcial III",
    "Semestre 5 - Parcial I", 
    "Semestre 5 - Parcial II", 
    "Semestre 5 - Parcial III",
    "Semestre 6 - Parcial I", 
    "Semestre 6 - Parcial II", 
    "Semestre 6 - Parcial III"
];

function numberToPartial(number){
    return partialList[number];
};

function fillPartialSelectInput(input) {

    input.innerHTML = `
    <option value="">Random</option>`;

    for (let i = 0; i < partialList.length; i++) {
        const e = partialList[i];
    
        input.innerHTML += `<option value="${i}">${e}</option>`;
    }

}

fillPartialSelectInput(cat2Input)
fillPartialSelectInput(editCat2Input)
fillPartialSelectInput(cat2FilterInput)


