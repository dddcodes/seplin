const testMode = false;
const testQuestN = 0;
const catalog_questsPerClick = 20;
const catalogQuestionWordLimit = 65;
/*[c] FUNCIONES */
//utilities
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
        case 7:
            month = "marzo"
            break;    
        case 8:
            month = "abril"
            break;     
        default:
            month = "mes indefinido"
            break;
    }

    return month;

};
function completeAsignatureName(abbreviation){
    switch (abbreviation) {
        case "rob":
			return "Robótica"
			break;
		case "vs":
            return "Vida Saludable"
            break;
        case "qui":
            return "Ciencias"
            break;    
        case "eng":
            return "Inglés"
            break;
        case "esp":
            return "Español"
            break;     
        case "his":
            return "Historia"
            break; 
        case "val":
            return "Valores"
            break;
        case "Tecno":
            return "Tecnología"
            break;
        case "ef":
            return "Educación Física"
            break; 
        case "fcye":
            return "Formación Cívica y Ética"
            break;
        case "aje":
            return "Ajedrez"
            break;
        case "art":
            return "Artes"
            break; 
        case "tuto":
            return "Tutoría"
            break;
        case "emp":
            return "Emprendimiento"
            break;

                
        default:
            return "Asignatura Indefinida"
            break;
    }
};
function REFRESH(){
    window.scrollTo(0, 0);
    clearBtnsBar();
    clearPageArea();

    openWelcomePage();
}
function OV(onlineValue, offlineValue){
    const returnValue = (navigator.onLine)? onlineValue : offlineValue;
    return returnValue
}

//CONSOLE MSGS
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

//DOM MANIPULATION
function appear(element, type = "block"){
    element.style.display = type;
};
function disappear(element){
    element.style.display = "none";
};
function clearHTML(element){
    element.innerHTML = "";
};

//LOCAL STORAGE FUNCTIONS
function saveQuestsData(){
    localStorage.removeItem("quests");
    localStorage.setItem("quests", JSON.stringify(questList));
};
function LS_createItem(itemName, creationCallback = ()=>{console.log("[LS] sin callback de creacion")}){
    console.log("LS_createItem()");
    if(!localStorage.getItem(itemName)){

        localStorage.setItem(itemName, "[]");
        console.log(`[LS]se creo '${itemName}' en la LS`);
        creationCallback();

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
function RESET_QUESTS(){
    localStorage.removeItem("quests");
}; // nunca es usada en la web, pero se puede usar en la consola para limpiar el LS



let defaultQuests = [];
function setQuest(question = "question", answer ="answer", 
    incorrectAnswer = ["incorrectAnswer1", "incorrectAnswer2", "incorrectAnswer3"], 
    cat1 ="",cat2 =0, ex ="sin explicacion D:",
    LS = false){

    let newQuestInfo = {
        question: question, 
        answer: answer,
        incorrectAnswer: incorrectAnswer, 
        cat1: cat1,
        cat2: parseInt(cat2),
        ex: ex,
        default: LS
    };

    switch (LS) {
        case true: 
            defaultQuests.push(newQuestInfo)
            break;
    
        default:
            questList.push(newQuestInfo);
            saveQuestsData();
            break;
    }

    console.log("NUEVO QUIZ CREADO");
};
LS_createItem('quests',()=>{
    setQuest("En qué consistió la Revolución Mexicana ( 1910 - 1917 ) ?", 
        "acabar la dictadura de Porfirio Díaz",
        ["guerra internacional con USA",
        "acabar con el dominio Español",
        "independencia de Texas",
        "invencion de maquinas industriales"],
        "his",
        1,
        `La Revolución Mexicana fue un conflicto armado que inició en 1910, 
        como consecuencia del descontento popular hacia la dictadura de Porfirio Díaz, y 
        que derivaría en una guerra civil que transformaría radicalmente las estructuras 
        políticas y sociales del país.`,
        true
    );
    setQuest("cúales son las propiedades EXTENSIVAS en Química?",
        "las que dependen del tamaño",
        ["las que no dependen del tamaño",
        "las que tienen baja fuerza intermolecular",
        "las que son contables"],
        "qui",
        1,
        "Las propiedades Químicas de un objeto son las que dependen del tamaño de este mismo",
        true
    );
});
let questList = localStorage.getItem("quests");
questList = JSON.parse(questList);
for (let i = 0; i < defaultQuests.length; i++) {
    const element = defaultQuests[i];
    questList.push(element);
}
saveQuestsData();
console.log(questList);

//QUESTS MANIPULATION

let questsToRemove = [];
function removeQuest(ubication){
    if(ubication){
        questList.splice(ubication, 1);
        saveQuestsData();
        console.log(`se a eliminado el quiz no.${ubication}`);
    }
};
function removeConfirm(ubication){
    const element = questList[ubication];
    appear(catalogRemoveConfirmBtn);
    
    //cambia de color la caja del quiz
    const box = document.querySelector(`#quest${ubication}`);
    const removeBtn = document.querySelector(`#deleteBtnQuest${ubication}`);

    if(questsToRemove.includes(ubication)){
        //se elimina del array
        questsToRemove.splice(questsToRemove.indexOf(ubication),1);
        console.log(questsToRemove);

        box.style.backgroundColor = "var(--main-clr-2)";
        removeBtn.style.backgroundColor = "var(--main-clr-3)";

        if(questsToRemove.length === 0){
            disappear(catalogRemoveConfirmBtn)
        }

    } else{
        //se guarda en el array para eliminar despues
        questsToRemove.push(ubication);
        console.log(questsToRemove);

        box.style.backgroundColor = "var(--red)";
        removeBtn.style.backgroundColor = "var(--main-clr-4)";
    }

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


//SUBPAGES y mas
function openEditQuestPage(ubication){
    clearBtnsBar()
    clearPageArea();

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

    const editQuestSubmitBtn = document.querySelector("#editQuestSubmitBtn");
    appear(editQuestSubmitBtn);
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
    clearPageArea();
    clearBtnsBar();

    appear(submitNewQuestBtn);
    appear(setQuestPage);
};
function openWelcomePage(){
    clearBtnsBar();
    clearPageArea();

    appear(welcomePage);
    appear(startQuestBtn);
    appear(editFilterBtn);
}
var catalog_quizesGenerated = 0;
function generateQuizes(){

    resaltedMsg("generate()")
    var m = 0;
    for (let i = catalog_quizesGenerated; m < catalog_questsPerClick; i++) {

        resaltedMsg("ciclo iniciado " + i)
        catalog_quizesGenerated++
        m++
        const element = questList[i];

        if(!element){
            resaltedMsg("no hay mas quizes!!!");
            catalogPage.innerHTML +=`<div class="simpleBox">No se encontraron mas quizes</div>`;;
            break;
        }
        question = (element.question.length >= catalogQuestionWordLimit)?
            element.question.slice(0, catalogQuestionWordLimit) + "...":
            element.question;

        catalogPage.innerHTML += `
        <div class="questionBox" id="quest${i}">

            <div class="headBox">
                <div class="questionNumber">
                    ${i}
                </div>
        
                <p class="asign">
                    ${completeAsignatureName(element.cat1)}
                </p>
            </div>

            <div class="questionBtnsBox">

                <button class="removeBtn" id="deleteBtnQuest${i}" onclick="removeConfirm(${i})">
                    <ion-icon name="close">X</ion-icon>
                </button>

                <hr>
                
                <button class="editBtn" onclick="openEditQuestPage(${i});">
                    <ion-icon name="pencil">Edit</ion-icon>
                </button>
                
                <hr>

                <button class="openDetailsBtn" onclick="showCatalogQuestionDetails(${i})">
                    <ion-icon name="eye">o</ion-icon>
                </button>

                <hr>
        
                <button class="closeDetailsBtn" onclick="removeCatalogQuestionDetails(${i})">
                    <ion-icon name="eye-off">ø</ion-icon>
                </button>   

            </div>

            <div class="question">
                ${question}
            </div>

            

            <div class="details" id="quest${i}detailsBox">

                <div class="catsBox">
                    <p class="asign">${completeAsignatureName(element.cat1)}</p>
                    <p class="month">${numberToMonth(element.cat2)}</p>
                </div>

                <div class="completeQuestionBox">
                    <p class="title">PREGUNTA</p>
                    <p class="content">${element.question}</p>
                </div>

                <div class="correctAnswerBox">
                    <p class="title">RESPUESTA</p>
                    <p class="content">${element.answer}</p>
                </div>


                <div class="incorrectAnswersBox">
                    <p class="title">RESPUESTAS INCORRECTAS</p>
                    <div class="content">
                        <p>1- ${element.incorrectAnswer[0]}</p>
                        <p>2- ${element.incorrectAnswer[1]}</p>
                        <p>3- ${element.incorrectAnswer[2]}</p>
                        <p>4- ${element.incorrectAnswer[3]}</p>
                    </div>
                </div>

                <div class="explanationBox">
                    <p class="title">EXPLICACION</p>
                    <p class="content">${element.ex}</p>
                </div>

            </div>


        </div>`
        
    }

    catalogPage.innerHTML += "<br/>"
}

function showCatalogQuestionDetails(i){
    const detailsBox = document.querySelector(`#quest${i}detailsBox`);

    appear(detailsBox);
}
function removeCatalogQuestionDetails(i){
    const detailsBox = document.querySelector(`#quest${i}detailsBox`);

    disappear(detailsBox);
}
function showCatalog(){
    clearAll()
    clearHTML(catalogPage);


    appear(catalogPage);
    appear(catalogGenerateBtn);

    catalog_quizesGenerated = 0
    generateQuizes();


};

function home(){
    openWelcomePage()

    btnsBar.style.background = "var(--main-clr)"
}




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
    
    clearPageArea();
    clearBtnsBar();
    
    clearHTML(answerRevelationBox);
    clearHTML(questBox);
    appear(questSubmitBtn);
    appear(showExBtn);
    appear(questBox);

    

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
        const element = questList[m];
        const chooseActualElement = () => {
            success(`${m} cumple con los filtros y no esta en el historial`);
            n = m;
            endLoop = true;

            his.push(m)
            clrConsoleText(`his: ${his}`, 'black', 'gold');
        };
        const showMsg = content => msg = content;

        const inHis = his.includes(m);
        const selectedMonth = mainFilters.cat2;
        const selectedAsign = mainFilters.cat1;
        const quizMonth = element.cat2;
        const quizAsign = element.cat1;

        if(!inHis & quizAsign === selectedAsign & quizMonth <= selectedMonth){

            chooseActualElement();

        }else if(!inHis & !selectedAsign & quizMonth <= selectedMonth){

            chooseActualElement();
            resaltedMsg(`No hay cat1 (📒 materia)`);
            showMsg(`No se ha especificado una Materia`);

        }else if(!inHis & quizAsign === selectedAsign & !selectedMonth){

            chooseActualElement();
            resaltedMsg(`No hay cat2 (📆 mes)`);
            showMsg(`No se ha especificado un Mes`);

        } else if(!inHis & !selectedAsign & !selectedMonth){

            chooseActualElement();
            resaltedMsg(`no hay 📒cat1 ni 📆cat2`);
            showMsg(`No hay filtros activos`);

        } else {
            fail(`${m} no cumple con los filtros o/y esta en el historial`);
        }

        if(i >= 200 ){
            chooseActualElement();
            fail(`😱no habian quests que cumplan con una o las dos categorias :[ por ende se mostro un quest aleatorio`);
            showMsg(`No se encontro el quiz adecuado`);
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
            <p class="niceBox" >
                ${quest.cat1 || "sin materia"} - ${numberToMonth(quest.cat2)}
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
function clearBtnsBar(){
    for (let i = 0; i < btnsBarBtns.length; i++) {
        const element = btnsBarBtns[i];
        disappear(element);
    }
    console.log("se ha limmpiado la barra de btns");

    appear(homeBtn);
    window.scrollTo(0, 0);
}
function clearPageArea(){
    for (let i = 0; i < pageContent.length; i++) {
        const element = pageContent[i];
        disappear(element);
    }
    window.scrollTo(0, 0);
    console.log("se ha limmpiado la pagina");
}
function clearAll(){
    clearBtnsBar()
    clearPageArea()
}



/*[c] DOM */

//divs:
const pageContent = document.querySelectorAll("#pageContent > main");
const page = document.querySelector("#pageContent");


const questBox = document.querySelector("#questsDiv");
const btnsBar = document.querySelector("#btnsBox");
const answerRevelationBox = document.querySelector("#answerRevelationDiv")
const filterLabel = document.querySelector("#filterLabel");
const filterMsgBox = document.querySelector("#filterMsgBox");

const welcomePage = document.querySelector("#welcomePage");
const setQuestPage = document.querySelector("#setQuestPage");
const removeQuestPage = document.querySelector("#removeQuestPage");
const catalogPage = document.querySelector("#catalogPage");
const editQuestPage = document.querySelector("#editQuestPage");

const showRemoveQuestBtnFailMsg = document.querySelector("#showRemoveQuestBtnFailMsg");
const showRemoveQuestDiv = document.querySelector("#showRemoveQuestDiv");

const catalogGenerateBtn = document.querySelector("#catalog_generateBtn");
const catalogQuestsArea = document.querySelector("#catalog_questsDiv");
//btns:
const btnsBarBtns = document.querySelectorAll("#btnsBox button");


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
const catalogCreateQuestBtn = document.querySelector("#createQuestBtn");

const homeBtn = document.querySelector("#homeBtn");

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
const hisLimit = (questList.length > 10)? 5: 2;
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

    appear(answerRevelationBox);
    answerRevelationBox.innerHTML = `
        <p class="simpleBox">EXPLICACIÓN: <br/> ${questList[actualQuestN].ex || "No hay una explicacion excrita o ocurrio un error"}</p>`;

});



editFilterBtn.addEventListener("click", () => { //editar filtros...
    clearBtnsBar();
    clearPageArea();

    appear(filterLabel);
    appear(filterSubmitBtn);


    clearHTML(questBox);
    clearHTML(answerRevelationBox);
    btnsBar.style.background = "var(--main-clr)";

    clrConsoleText(`se presiono btn para modificar filtros`, 'black', 'white');

});
filterSubmitBtn.addEventListener("click",() => { //subir filtros...

    editFilters(cat1FilterInput.value, parseInt(cat2FilterInput.value));


    clearBtnsBar();
    clearPageArea();
    
    disappear(filterLabel);

    appear(startQuestBtn);
    appear(editFilterBtn);
    appear(filterMsgBox);


});
questSubmitBtn.addEventListener("click", () => { //[c] cuando se conteste un quest...

    clearBtnsBar();

    appear(startQuestBtn);
    appear(editFilterBtn);

    appear(answerRevelationBox);

    const n = actualQuestN;
    const quest = questList[n];

    const selectedAnswer = questInput.value;
    const correctAnswer = quest.answer;

    let isCorrectAnswer = false;

    function showReveal( type, text ){
        answerRevelationBox.innerHTML += `<p class="simpleBox ${type}">${text}</p>`
    }
    function ex(){ showReveal("",`Explicación: <br /> ${quest.ex}`)  }

    switch (selectedAnswer) {

        case correctAnswer: //si R correcta

            success(`RESPUESTA CORRECTA (se a escrito: "${selectedAnswer}")`);
            showReveal("success", `EXCELENTE! <br /> 
                tu Respuesta fue: '${selectedAnswer}'`);
            ex();
            isCorrectAnswer = true;
            break;

        case "": //si no hay R seleccionada

            fail(`NO SE HA INGRESADO UNA RESPUESTA`);
            showReveal("fail", "NO SE HA INGRESADO UNA RESPUESTA >:(");
            break;

        default: //si R es incorrecta

            fail(`RESPUESTA INCORRECTA ("${selectedAnswer}")`);
            showReveal("fail", `PA' LA PROXIMA!<br/> 
                -> Contestaste: '${selectedAnswer}' <br/> 
                -> Respuesta correcta: '${correctAnswer}'`);
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
});



setQuestPageBtn.addEventListener("click", ()=>{
    newResaltedMsg("se presiono el btn para ir a crear un nuevo quiz")
    clearBtnsBar();
    clearPageArea();

    appear(submitNewQuestBtn);
    appear(setQuestPage);
});
submitNewQuestBtn.addEventListener("click",()=>{
    disappear(submitNewQuestBtn);

    appear(submitNewQuestCancelBtn);
    appear(submitNewQuestConfirmBtn);

});
submitNewQuestConfirmBtn.addEventListener("click", ()=>{
    REFRESH()

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
        console.log("NO HAY R INCORRECTA NO.  4");
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
    REFRESH();
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
    clearBtnsBar();
    clearPageArea();

    appear(removeQuestPage);
    appear(removeQuestBtn);
    appear(showRemoveQuestBtn);
});
removeQuestBtn.addEventListener("click",(e)=>{
    disappear(removeQuestBtn);
    disappear(showRemoveQuestBtn);

    appear(removeQuestConfirmBtn);
    appear(removeQuestCancelBtn);
});
removeQuestCancelBtn.addEventListener("click",()=>{
    disappear(removeQuestConfirmBtn);
    disappear(removeQuestCancelBtn);

    appear(removeQuestBtn);
    appear(showRemoveQuestBtn);
});
removeQuestConfirmBtn.addEventListener("click",()=>{
    removeQuest(removeQuestInput.value);

    REFRESH();
});
showRemoveQuestBtn.addEventListener("click",()=>{

    if(removeQuestInput.value < questList.length ){

        disappear(showRemoveQuestBtnFailMsg);
        
        appear(showRemoveQuestMotherDiv);

        const input = parseInt(removeQuestInput.value);
        const e = questList[input];

        showRemoveQuestDiv.innerHTML = `
        <p class="niceBox mainClr3">
            MATERIA: ${e.cat1 || "indefinida"}. MES: ${numberToMonth(e.cat2)}.
        </p>
        <p class="niceBox mainClr3">
            PREGUNTA: <br/> "${e.question}"
        </p>
        <p class="niceBox mainClr3">
            RESPUESTA: <br/> "${e.answer}"
        </p>
        <p class="niceBox mainClr3">
            OPCIONES INCORRECTAS:<br/>
            1-${e.incorrectAnswer[0]}<br/>
            2-${e.incorrectAnswer[1]}<br/>
            3-${e.incorrectAnswer[2]}<br/>
            4-${e.incorrectAnswer[3]}
        </p>`

    } else{
        disappear(showRemoveQuestMotherDiv);
        appear(showRemoveQuestBtnFailMsg);
    }


});


catalogPageBtn.addEventListener("click",showCatalog);
catalogToSetQuestPageBtn.addEventListener("click", ()=>{
    newResaltedMsg("se presiono el btn para ir a crear un nuevo quiz");
    
    clearBtnsBar();
    clearPageArea();

    appear(submitNewQuestBtn);
    appear(setQuestPage);
});
catalogGenerateBtn.addEventListener("click", generateQuizes)
catalogRemoveConfirmBtn.addEventListener("click",()=>{

    let questsToRemoveInOrder = questsToRemove.sort();
    questsToRemoveInOrder = questsToRemoveInOrder.reverse();

    
    for (let i = 0; i < questsToRemoveInOrder.length; i++) {

        const element = questsToRemoveInOrder[i];
        removeQuest(element);

        const box = document.querySelector(`#quest${element}`);
        box.style.background = "var(--red)";
        box.innerHTML = "QUIZ ELIMINADO PERMANENTEMENTE";

    }
    
    disappear(catalogRemoveConfirmBtn);
    
    questsToRemove = [];
    console.log("se ha tratado de vaciar questToRemoveInOrder");

});

homeBtn.addEventListener("click", home);


openWelcomePage();