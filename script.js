const testMode = false;
const testQuestN = 0;
/*[c] FUNCIONES */
function setRandomNumber(min = 0, max = 4){
    return Math.floor(Math.random() * ( max - min) ) + min;
};
function numberToMonth(number){
    let month = "";
    switch (number) {
        case 0:
			month = "sin mes"
			break;
		case 1:
            month = "septiembre"
            break;
        case 2:
            month = "octubre"
            break;    
        case 3:
            month = "noviembre"
            break;
        case 4:
            month = "diciembre"
            break;
        case 5:
            month = "enero"
            break;    
        case 6:
            month = "febrero"
            break;     
        default:
            month = "indefinido"
            break;
    }

    return month;

};
function REFRESH(){
    window.location.href = "./index.html";
}
function OV(onlineValue, offlineValue){
    const returnValue = (navigator.onLine)? onlineValue : offlineValue;
    return returnValue
}


function clrConsoleText(text = '[clrConsoleText FUNCTION] without text ', clr = '#fff', bg = '#2a2080'){
    console.log(`%c ${text} `, `background: ${bg}; color: ${clr}`);
};
function success(text) {
    clrConsoleText(text, 'white', 'green');
};
function fail(text) {
    clrConsoleText(text, 'white', 'red');
};
function resaltedMsg(text) {
    clrConsoleText(text, 'white', 'purple');
};
function newResaltedMsg(text) {
    clrConsoleText(text, 'black', 'aqua');
};


function appear(element, type = "block"){
    element.style.display = type;
    //resaltedMsg(`APPEAR( ${element.id} )`);
};
function disappear(element){
    element.style.display = "none";
};
function clearHTML(element){
    element.innerHTML = "";
};
function saveQuestsData(){
    localStorage.removeItem("quests");
    localStorage.setItem("quests", JSON.stringify(questList));
};
function setItem(id){
    return document.querySelector(`#${id}`);
}


function LS_createItem(itemName){
    console.log("LS_createItem()");
    if(!localStorage.getItem(itemName)){

        localStorage.setItem(itemName, "[]");
        console.log(`[LS]se creo '${itemName}' en la LS`);

    };
};
function LS_addToItem(itemName, newContent){
    let content = localStorage.getItem(itemName); //se obtiene el contenido del item...
    content = JSON.parse(content); //se convierte en array JS el item...
    content.push(newContent); //se agrega el nuevo contenido al array JS...
    content = JSON.stringify(content); //se convierte en string el array JS...

    localStorage.removeItem(itemName);
    localStorage.setItem(itemName, content);
};
function RESET(){
    localStorage.removeItem("quests");
};


function setQuest(question = "question", answer ="answer", incorrectAnswer = ["incorrectAnswer1", "incorrectAnswer2", "incorrectAnswer3"], cat1 ="",cat2 =0, ex ="sin explicacion D:"){
    let newQuestInfo = {
        question: question, 
        answer: answer,
        incorrectAnswer: incorrectAnswer, 
        cat1: cat1,
        cat2: parseInt(cat2),
        ex: ex
    };
    questList.push(newQuestInfo);
    
    saveQuestsData();

    console.log("NUEVO QUIZ CREADO");
};
function removeQuest(ubication){
    questList.splice(ubication, 1);
    saveQuestsData();
    console.log(`se a eliminado el quiz no.${ubication}`);
};
function removeConfirm(ubication){
    disappear(catalogToSetQuestPageBtn);

    appear(catalogRemoveConfirmBtn);
    
    const box = document.querySelector(`#quest${ubication}`);
    box.style.background = "var(--main-clr-3)";

    catalogRemoveConfirmBtn.addEventListener("click",()=>{
        removeQuest(ubication);
        disappear(catalogRemoveConfirmBtn);
        box.style.background = "var(--red)";
        box.innerHTML = "ELIMINADO";
    });
};
function editQuest( ubication, question, answer, incorrectAnswer, cat1, cat2, ex){
    const element = questList[ubication];
    element.question = question;
    element.answer = answer;
    element.incorrectAnswer = incorrectAnswer;
    element.cat1 = cat1;
    element.cat2 = cat2;
    element.ex = ex;

    saveQuestsData();
    console.log(`se a modificado el no.${ubication}`);
};
function openEditQuestPage(ubication){
    disappear(welcomePage);
    disappear(startQuestBtn);
    disappear(editFilterBtn);

    disappear(catalogPage);
    disappear(questBox);
    disappear(catalogToSetQuestPageBtn);

    appear(editQuestPage);


    const element = questList[ubication];

    editQuestionInput.value = element.question;
    editAnswerInput.value = element.answer;
    editIncorrectAnswer1Input.value = element.incorrectAnswer[0];
    editIncorrectAnswer2Input.value = element.incorrectAnswer[1];
    editIncorrectAnswer3Input.value = element.incorrectAnswer[2];
    editIncorrectAnswer4Input.value = element.incorrectAnswer[3];
    editCat1Input.value = element.cat1;
    editCat2Input.value = element.cat2;
    editExInput.value = element.ex;

    btnsBar.innerHTML += `
    <button id="editQuestSubmitBtn">
		GUARDAR CAMBIOS
	</button>`;
    const editQuestSubmitBtn = document.querySelector("#editQuestSubmitBtn");
    editQuestSubmitBtn.addEventListener("click",()=>{

        disappear(editQuestPage);
        disappear(editQuestSubmitBtn);

        editQuest(ubication,
            editQuestionInput.value,
            editAnswerInput.value,
            [editIncorrectAnswer1Input.value,
            editIncorrectAnswer2Input.value,
            editIncorrectAnswer3Input.value,
            editIncorrectAnswer4Input.value],
            editCat1Input.value,
            parseInt(editCat2Input.value),
            editExInput.value);

        saveQuestsData();
        REFRESH();
            
    });
}
function openSetQuestPage(){ //solo para el btn del catalogo
    disappear(catalogToWelcomePageBtn);
    disappear(catalogPage);
    disappear(catalogToSetQuestPageBtn);

    appear(submitNewQuestBtn);
    appear(setQuestPage);
};
function showCatalog(){
    clearHTML(catalogPage);
    appear(catalogPage);
    appear(catalogToWelcomePageBtn);
    appear(catalogToSetQuestPageBtn);

    for (let i = 0; i < questList.length; i++) {
        const element = questList[i];
        
        const catalogQuestionWordLimit = 65;

        element.question = (element.question.length >= catalogQuestionWordLimit)?
            element.question.slice(0, catalogQuestionWordLimit) + "...":
            element.question;

        catalogPage.innerHTML += `
        <br/>
        <div class="simpleBox a" id="quest${i}" style="text-align: left;">
            ${i} 👉
            <button class="miniBtn fail" onclick="removeConfirm(${i})">
                <ion-icon name="close">${OV("","Matar")}}</ion-icon>
            </button>
            
            <button class="miniBtn" onclick="openEditQuestPage(${i});">
            <ion-icon name="pencil">${OV("","Editar")}</ion-icon>
            </button>

            <button class="miniBtn" id="catalogQuestViewBtn${i}"
                onclick="viewForm(${i});">
                <ion-icon name="eye">${OV("", "Mas info")}</ion-icon>
            </button>
            ${element.question}
            <br/>
            <div id="quest${i}viewBox" style="display:none;"></div>
        </div>`
        
    }


    catalogPage.innerHTML += `
    <br/>
    <div class="simpleBox a largeBtn" onClick="openSetQuestPage()">
        <ion-icon name="add-circle">${OV("","AGREGAR QUIZ")}</ion-icon>
    </div>
    `;


};
function viewForm (ubication){
    const item = document.querySelector(`#quest${ubication}viewBox`);
    const btn = document.querySelector(`#catalogQuestViewBtn${ubication}`);

    const e = questList[ubication];

    appear(item);

    const content = `
    <hr/><br/>
    <p class="niceBox mainClr3">
        MATERIA: ${e.cat1 || "indefinida"}. MES: ${numberToMonth(e.cat2)}.
    </p>
    <br/>
    <p class="niceBox mainClr3">
        Respuesta: ${e.answer}
    </p>
    <br/>
    <p class="niceBox mainClr3">
        Respuestas incorrectas:<br/>
        1-${e.incorrectAnswer[0]}<br/>
        2-${e.incorrectAnswer[1]}<br/>
        3-${e.incorrectAnswer[2]}<br/>
        4-${e.incorrectAnswer[3]}
    </p>`;

    item.innerHTML = content;

    btn.addEventListener("click", ()=>{
        clearHTML(item);
        disappear(item);
    });
    
}; 


/*[c] funcion para editar los filtros principales: materia y mes */
function editFilters(newCat1, newCat2){
    mainFilters.cat1 = newCat1;
    mainFilters.cat2 = newCat2 ;

    clrConsoleText(`FILTROS EDITADOS EXITOSAMENTE!`, 'black', 'white');
    clrConsoleText(`cat1(materia) = ${mainFilters.cat1}`, 'black', 'aqua');
    clrConsoleText(`cat2((mes)) = ${mainFilters.cat2}`, 'black', 'aqua');
    console.log(`--------------------------------------`);

};
/*[c] funcion para mostrar una nueva quest*/
function startQuest(specificQuest){
    clrConsoleText(`-------------------------------------`, 'black', 'white');
    clrConsoleText(`startQuest() iniciada`, 'white', 'blue');


    btnsBar.style.background = "var(--main-clr)";
    
    clearHTML(answerRevelationBox);
    clearHTML(questBox);
    
    disappear(welcomePage);
    disappear(startQuestBtn);
    disappear(editFilterBtn);
    appear(questSubmitBtn);
    appear(showExBtn);

    let i = 0;
    let endLoop = false;
    let n = 0;
    let msg;

    //[c] LOOP PARA BUSCAR UN QUEST
    do{
        if(typeof specificQuest === "number") {
            n = specificQuest;
            break;
        };   
        if(testMode) {
            n = testQuestN;
            break;
        } 
        if(his.length >= hisLimit) his.shift();

        console.log(`🔁 loop no. ${i}`)

        let m = setRandomNumber( 0, questList.length);
        let element = questList[m];
        let chooseActualElement = () => {
            success(`${m} cumple con los filtros y no esta en el historial`);
            n = m;
            endLoop = true;

            his.push(m)
            clrConsoleText(`his: ${his}`, 'black', 'gold');
        };
        let showMsg = (content) => msg = content;

        if(!his.includes(m) & element.cat1 === mainFilters.cat1 & element.cat2 <= mainFilters.cat2){

            chooseActualElement();

        }else if(!his.includes(m) & !mainFilters.cat1 & element.cat2 <= mainFilters.cat2){

            chooseActualElement();
            resaltedMsg(`No hay cat1 (📒 materia)`);
            showMsg(`No hay 📒 materia`);

        }else if(!his.includes(m) & element.cat1 === mainFilters.cat1 & !mainFilters.cat2){

            chooseActualElement();
            resaltedMsg(`No hay cat2 (📆 mes)`);
            showMsg(`No hay 📆 mes`);

        } else if(!his.includes(m) & !mainFilters.cat1 & !mainFilters.cat2){

            chooseActualElement();
            resaltedMsg(`no hay 📒cat1 ni 📆cat2`);
            showMsg(`no hay 📒materia ni 📆mes`);

        } else {
            fail(`${m} no cumple con los filtros o/y esta en el historial`);
        }

        if(i >= 100 ){
            chooseActualElement();
            fail(`😱no habian quests que cumplan con una o las dos categorias :( por ende se mostro un quest aleatorio`);
            showMsg(`No hay quest que cumpla tus preferencias`);
        }
        i++

    }while (!endLoop)

    const quest = (typeof specificQuest === "number")? questList[specificQuest] : questList[n];
    actualQuestN = n;
        
    success(`--> MOSTRANDO AHORA LA QUEST NO: ${n}`);


    //[c] LOOP PARA ELEGIR LAS MULTIPLES RESPUESTAS DEL QUEST
    let possibleAnswerArray = []
    let answersHtml = ``;
    let posibleAswerN = 0;
    function addAnswerOption(item){
        success(`R: "${item}" PASO!!!`)
        possibleAnswerArray.push(item);
        posibleAswerN++;
        answersHtml += 
            `<option value="${item}">${posibleAswerN} - ${item}</option>`;
    }
    const correctAnswerUbication = setRandomNumber(0,answersPerQuest+1);
    for (let i = 0; possibleAnswerArray.length <= answersPerQuest; i++) {

        let selectedAnswerId = setRandomNumber(0, answersPerQuest);
        let selectedAnswer = (i === correctAnswerUbication)?
            quest.answer:
            quest.incorrectAnswer[selectedAnswerId];

        console.log(`CICLO NO. ${i}...\n posible opcion: ${selectedAnswer}`);

        if(!possibleAnswerArray.includes(selectedAnswer) ) addAnswerOption(selectedAnswer);
        

        if(i >= 200) break; //para evitar loops infinitos que congelan el dispositivo en caso de fallas.
        
    }
    console.log(`Answers: ${possibleAnswerArray}`);


    msg = (msg)? `<p class="niceBox"> ${msg} </p>` : "";
    
    //[c] mostramos la pregunta, su input y el btn de envio.
    questBox.innerHTML +=`
        <div class="questEpicBox">

            ${msg}
            <p class="niceBox">
                NO.${n} - ${quest.cat1 || "sin materia"} - ${numberToMonth(quest.cat2)}
            </p>

            <p class="simpleBox llamativeClr">${quest.question}</p>

            <select id="questInput">
                <option value="">selecciona una respuesta</option>
                ${answersHtml}
            </select>

        </div>
        `;

    const questInput = document.querySelector("#questInput"); //[c] el input para la respuesta.
    
    clrConsoleText(`-------------------------------------`, 'black', 'white');
};
/*[c] QUESTS LOCAL STORAGE */
LS_createItem('quests');
let questList = localStorage.getItem("quests");
questList = JSON.parse(questList);
console.log(questList);

/*[c] DOM */

//divs:
const questBox = document.querySelector("#questsDiv");
const btnsBar = document.querySelector("#btnsBox");
const answerRevelationBox = document.querySelector("#answerRevelationDiv")
const filterLabel = document.querySelector("#filterLabel");

const welcomePage = document.querySelector("#welcomePage");
const setQuestPage = document.querySelector("#setQuestPage");
const removeQuestPage = document.querySelector("#removeQuestPage");
const catalogPage = document.querySelector("#catalogPage");
const editQuestPage = document.querySelector("#editQuestPage");

const showRemoveQuestBtnFailMsg = document.querySelector("#showRemoveQuestBtnFailMsg");
const showRemoveQuestDiv = document.querySelector("#showRemoveQuestDiv");


//btns:
const filterSubmitBtn = document.querySelector("#filterSubmitBtn");
const editFilterBtn = document.querySelector("#editFilterBtn");

const questSubmitBtn = document.querySelector("#questSubmitBtn"); //[c] el btn para contestar.
const startQuestBtn = document.querySelector("#startQuestBtn");
const showExBtn = document.querySelector("#showExBtn");

const setQuestPageBtn = document.querySelector("#setQuestPageBtn");
const submitNewQuestBtn = document.querySelector("#submitNewQuestBtn");
const clearInputsBtn = document.querySelector("#clearInputsBtn");
const submitNewQuestConfirmBtn = document.querySelector("#submitNewQuestConfirmBtn");
const submitNewQuestCancelBtn = document.querySelector("#submitNewQuestCancelBtn");

const removeQuestPageBtn = document.querySelector("#removeQuestPageBtn");
const removeQuestBtn = document.querySelector("#removeQuestBtn");
const removeQuestConfirmBtn = document.querySelector("#removeQuestConfirmBtn");
const removeQuestCancelBtn = document.querySelector("#removeQuestCancelBtn");

const showRemoveQuestBtn = document.querySelector("#showRemoveQuestBtn");
const showRemoveQuestMotherDiv = document.querySelector("#showRemoveQuestMotherDiv");

const catalogPageBtn = document.querySelector("#catalogPageBtn");
const catalogRemoveConfirmBtn = document.querySelector("#catalogRemoveConfirmBtn");
const catalogToWelcomePageBtn = setItem("catalogToWelcomePageBtn");
const catalogToSetQuestPageBtn = setItem("catalogToSetQuestPageBtn")

//inputs:
const cat1FilterInput = document.querySelector("#cat1FilterInput");
const cat2FilterInput = document.querySelector("#cat2FilterInput");



const questionInput = document.querySelector("#questionInput");
const answerInput = document.querySelector("#answerInput");
const exInput = document.querySelector("#exInput");

const incorrectAnswer1Input = document.querySelector("#incorrectAnswer1Input");
const incorrectAnswer2Input = document.querySelector("#incorrectAnswer2Input");
const incorrectAnswer3Input = document.querySelector("#incorrectAnswer3Input");
const incorrectAnswer4Input = document.querySelector("#incorrectAnswer4Input");

const cat1Input = document.querySelector("#cat1Input");
const cat2Input = document.querySelector("#cat2Input");



const editQuestionInput = document.querySelector("#editQuestionInput");
const editAnswerInput = document.querySelector("#editAnswerInput");
const editExInput = document.querySelector("#editExInput");

const editIncorrectAnswer1Input = document.querySelector("#editIncorrectAnswer1Input");
const editIncorrectAnswer2Input = document.querySelector("#editIncorrectAnswer2Input");
const editIncorrectAnswer3Input = document.querySelector("#editIncorrectAnswer3Input");
const editIncorrectAnswer4Input = document.querySelector("#editIncorrectAnswer4Input");

const editCat1Input = document.querySelector("#editCat1Input");
const editCat2Input = document.querySelector("#editCat2Input");


const removeQuestInput = document.querySelector("#removeQuestInput");



/*[c] VARIABLES */
const hisLimit = 2;
let his = [];

let answersPerQuest = 3;
let actualQuestN;
let mainFilters = {
    cat1: undefined, // la materia.
    cat2: undefined // el mes.
}

/*[c] EVENT LISTENERS */
startQuestBtn.addEventListener("click",startQuest); //empezar un quest...
showExBtn.addEventListener("click", ()=> {
    answerRevelationBox.innerHTML = `
        <hr style='margin-bottom: 25px'/>
        <p class="simpleBox">EXPLICACIÓN: <br/> ${questList[actualQuestN].ex}</p>`;
});



editFilterBtn.addEventListener("click", () => { //editar filtros...

    appear(filterLabel);
    appear(filterSubmitBtn);

    disappear(editFilterBtn);
    disappear(startQuestBtn);
    disappear(welcomePage);

    clearHTML(questBox);
    clearHTML(answerRevelationBox);
    btnsBar.style.background = "var(--main-clr-2)";

    clrConsoleText(`se presiono btn para modificar filtros`, 'black', 'white');

});
filterSubmitBtn.addEventListener("click",() => { //subir filtros...

    editFilters(cat1FilterInput.value, parseInt(cat2FilterInput.value));


    disappear(filterLabel);
    disappear(filterSubmitBtn);
    appear(editFilterBtn);
    appear(startQuestBtn);

    questBox.innerHTML = "<p class='simpleBox llamativeClr'>FILTROS EDITADOS EXITOSAMENTE!</p>"

});
questSubmitBtn.addEventListener("click", () => { //[c] cuando se conteste un quest...

    disappear(questSubmitBtn);
    disappear(showExBtn);
    appear(editFilterBtn);
    appear(startQuestBtn);

    const n = actualQuestN;
    const quest = questList[n];

    const selectedAnswer = questInput.value;
    const correctAnswer = quest.answer;

    let isCorrectAnswer = false;
    answerRevelationBox.innerHTML = "<hr style='margin-bottom: 25px' />";

    function showReveal( type, text ){
        answerRevelationBox.innerHTML += `<p class="simpleBox ${type}">${text}</p>`
    }
    function ex(){ showReveal("",`Explicación: <br /> ${quest.ex}`)  }

    switch (selectedAnswer) {

        case correctAnswer: //si R correcta

            success(`RESPUESTA CORRECTA (se a escrito: "${selectedAnswer}")`);
            showReveal("success", `TODO UN CAPO BD <br /> 
                R: '${selectedAnswer}'`);
            ex();
            isCorrectAnswer = true;
            break;
        case "": //si no hay R seleccionada

            fail(`NO SE HA INGRESADO UNA RESPUESTA`);
            showReveal("fail", "NO SE HA INGRESADO UNA RESPUESTA >:(");
            break;
        default: //si R es incorrecta

            fail(`RESPUESTA INCORRECTA ("${selectedAnswer}")`);
            showReveal("fail", `MAL CONTESTADA (TOT)<br/> 
                -> pusiste: '${selectedAnswer}' <br/> 
                -> R: '${correctAnswer}'`);
            ex();
            break;

    }
    if(!correctAnswer){
        answerRevelationBox.innerHTML = `
        <hr style='margin-bottom: 25px' />
        <p class="simpleBox" style="background: orange;">
            WTF me parece que no hay respuesta correcta .-.
            <br/>
            <img src="./what.gif">
        </p>`
    }

    let color = (isCorrectAnswer)? "var(--green)" : "var(--red)";
    color = (correctAnswer)? color : "orange";
    questInput.style.background = color;
    btnsBar.style.background = color;
});



setQuestPageBtn.addEventListener("click", ()=>{
    newResaltedMsg("se presiono el btn para ir a crear un nuevo quiz")
    disappear(welcomePage);
    disappear(startQuestBtn);
    disappear(editFilterBtn);

    appear(submitNewQuestBtn);
    appear(setQuestPage);
});
submitNewQuestBtn.addEventListener("click",()=>{
    disappear(submitNewQuestBtn);

    appear(submitNewQuestCancelBtn);
    appear(submitNewQuestConfirmBtn);

});
submitNewQuestConfirmBtn.addEventListener("click", ()=>{
    disappear(submitNewQuestBtn);
    disappear(setQuestPage);
    disappear(submitNewQuestCancelBtn);
    disappear(submitNewQuestConfirmBtn);

    appear(welcomePage);
    appear(startQuestBtn);
    appear(editFilterBtn);

    if(incorrectAnswer4Input.value){
        setQuest(
            questionInput.value,
            answerInput.value,
            [
                incorrectAnswer1Input.value,
                incorrectAnswer2Input.value,
                incorrectAnswer3Input.value,
                incorrectAnswer4Input.value
            ],
            cat1Input.value,
            JSON.parse(cat2Input.value),
            exInput.value
        )
    } else{
        newResaltedMsg("NO HAY R INCORRECTA NO.  4");
        setQuest(
            questionInput.value,
            answerInput.value,
            [
                incorrectAnswer1Input.value,
                incorrectAnswer2Input.value,
                incorrectAnswer3Input.value
            ],
            cat1Input.value,
            cat2Input.value,
            exInput.value
        )
    }
});
submitNewQuestCancelBtn.addEventListener("click", ()=>{
    disappear(submitNewQuestBtn);
    disappear(setQuestPage);
    disappear(submitNewQuestCancelBtn);
    disappear(submitNewQuestConfirmBtn);

    appear(welcomePage);
    appear(startQuestBtn);
    appear(editFilterBtn);
});
clearInputsBtn.addEventListener("click", ()=>{
    questionInput.value = "";
    answerInput.value = "";
    incorrectAnswer1Input.value = "";
    incorrectAnswer2Input.value = "";
    incorrectAnswer3Input.value = "";
    incorrectAnswer4Input.value = "";
    cat1Input.value = "";
    cat2Input.value = "";
    exInput.value = "";
});


removeQuestPageBtn.addEventListener("click",()=>{
    disappear(welcomePage);
    disappear(startQuestBtn);
    disappear(editFilterBtn);

    appear(removeQuestPage);
    appear(removeQuestBtn);
    appear(showRemoveQuestBtn);
});
removeQuestBtn.addEventListener("click",()=>{
    disappear(removeQuestBtn);
    disappear(showRemoveQuestBtn);

    appear(removeQuestConfirmBtn);
    appear(removeQuestCancelBtn);
});
removeQuestCancelBtn.addEventListener("click",()=>{
    disappear(removeQuestConfirmBtn);
    disappear(removeQuestCancelBtn);

    appear(removeQuestBtn);
});
removeQuestConfirmBtn.addEventListener("click",()=>{
    disappear(removeQuestPage);
    disappear(removeQuestBtn);
    disappear(removeQuestConfirmBtn);
    disappear(removeQuestCancelBtn);

    appear(welcomePage);
    appear(startQuestBtn);
    appear(editFilterBtn);

    removeQuest(removeQuestInput.value)
});
showRemoveQuestBtn.addEventListener("click",()=>{

    if(removeQuestInput.value < questList.length ){

        disappear(showRemoveQuestBtnFailMsg);
        
        appear(showRemoveQuestMotherDiv);

        const input = removeQuestInput.value;
        const quest = questList[input]

        showRemoveQuestDiv.innerHTML = `
        <p class="niceBox mainClr3">
            ID: ${input} <br/> 
            MATERIA: ${quest.cat1} <br/> 
            MES: ${numberToMonth(quest.cat2)}
        </p>

        <p class="niceBox mainClr3">
            PREGUNTA:<br/>
            ${quest.question}
        </p>

        <p class="niceBox mainClr3">
            EXPLICACION:<br/>
            ${quest.ex}
        </p>

        <p class="niceBox mainClr3">
            RESPUESTA:<br/>
            ${quest.answer}
        </p>
        `;

    } else{
        disappear(showRemoveQuestMotherDiv);
        appear(showRemoveQuestBtnFailMsg);
    }

});


catalogPageBtn.addEventListener("click",()=>{
    disappear(welcomePage);
    disappear(startQuestBtn);
    disappear(editFilterBtn);

    appear(catalogPage);

    showCatalog();
});
catalogToWelcomePageBtn.addEventListener("click", ()=>{
    REFRESH();
});
catalogToSetQuestPageBtn.addEventListener("click", ()=>{
    newResaltedMsg("se presiono el btn para ir a crear un nuevo quiz");
    
    disappear(catalogToWelcomePageBtn);
    disappear(catalogPage);
    disappear(catalogToSetQuestPageBtn);

    appear(submitNewQuestBtn);
    appear(setQuestPage);
});

//SOLO PARA TESTEAR RAPIDO UN QUEST:
//startQuest();