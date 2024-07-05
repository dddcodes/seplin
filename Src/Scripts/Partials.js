
/*FUNCTIONS RELATIONATED WITH QUIZ PARTIALS, AND THE LIST OF THEM*/

const partialList = [
    "Semestre III - Parcial I", "Semestre III - Parcial II", "Semestre III - Parcial III",
    "Semestre IV - Parcial I", "Semestre IV - Parcial II", "Semestre IV - Parcial III",
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


