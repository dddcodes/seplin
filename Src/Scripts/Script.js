

const hisLimit = historyLimitPorcentage * questList.length;

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
    appear(catalogRemoveConfirmBtn);
    
    //cambia de color la caja del quiz
    const questionDiv = document.querySelector(`#quest${ubication} > .question`);

    if(questsToRemove.includes(ubication)){
        //se elimina del array
        questsToRemove.splice(questsToRemove.indexOf(ubication),1);
        console.log(questsToRemove);

        questionDiv.style.backgroundColor = "var(--main-clr)";

        if(questsToRemove.length === 0){
            disappear(catalogRemoveConfirmBtn)
        }

    } else{
        //se guarda en el array para eliminar despues
        questsToRemove.push(ubication);
        console.log(questsToRemove);

        questionDiv.style.backgroundColor = "var(--red)";
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
function openSetQuestPage(){ 
    clearAll()

    appear(submitNewQuestBtn);
    appear(setQuestPage);
};
function openWelcomePage(){
    clearAll()

    appear(welcomePage);
    appear(startQuestBtn);
    appear(editFilterBtn);
}
function openAdvancedPage(){
    clearAll()

    appear(advancedPage)
}

function openAsignsPage(){
    clearAll();

    appear(asignsPage);
}

var catalog_quizesGenerated = 0;
var catalog_allQuizesGenerated = false;
let catalog_generateClicks = 0;
function generateQuizes(){
    const generateQuizesBtn = document.querySelector(`#catalog_generateBtn${catalog_generateClicks}`)
    if(generateQuizesBtn){
        disappear(generateQuizesBtn)
    }

    catalog_generateClicks++

    resaltedMsg("generate()")
    var m = 0;
    let quizesGeneratedInThisLoop = 0;
    for (let i = catalog_quizesGenerated; m < catalog_questsPerClick; i++) {

        resaltedMsg("ciclo iniciado " + i)
        catalog_quizesGenerated++
        quizesGeneratedInThisLoop++
        m++
        const element = questList[i];
        if(!element){
            resaltedMsg("NO HAY MAS QUIZES!");
            catalogPage.innerHTML +=`<div class="simpleBox">NO HAY MAS QUIZES</div><br>`;
            catalog_allQuizesGenerated = true;
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
                    ${completeAsignatureName(element.cat1) || "INDEFINIDA"}
                </p>
            </div>

            <div class="questionBtnsBox">

                <button class="removeBtn" id="deleteBtnQuest${i}" onclick="removeConfirm(${i})">
                    <ion-icon name="close"></ion-icon>
                </button>

                <hr>
                
                <button class="editBtn" onclick="openEditQuestPage(${i});">
                    <ion-icon name="pencil"></ion-icon>
                </button>
                
                <hr>

                <button class="openDetailsBtn" onclick="showCatalogQuestionDetails(${i})">
                    <ion-icon name="eye"></ion-icon>
                </button>

                <hr>
        
                <button class="closeDetailsBtn" onclick="removeCatalogQuestionDetails(${i})">
                    <ion-icon name="eye-off"></ion-icon>
                </button>   

            </div>
            <div class="partialBox">
                    ${numberToPartial(element.cat2) || "<em>SIN MES</em>"}
            </div>

            <div class="question">
                ${question || "<em>PREGUNTA INDEFINIDA</em>"}
            </div>


            <div class="details" id="quest${i}detailsBox">


                <div class="completeQuestionBox">
                    <p class="title">PREGUNTA</p>
                    <p class="content">${element.question || "<em>INDEFINIDA</em>"}</p>
                </div>

                <div class="correctAnswerBox">
                    <p class="title">RESPUESTA</p>
                    <p class="content">${element.answer || "<em>INDEFINIDA</em>"}</p>
                </div>


                <div class="incorrectAnswersBox">
                    <p class="title">RESPUESTAS INCORRECTAS</p>
                    <div class="content">
                        <p>1- ${element.incorrectAnswer[0] || "<em>INDEFINIDA</em>"}</p>
                        <p>2- ${element.incorrectAnswer[1] || "<em>INDEFINIDA</em>"}</p>
                        <p>3- ${element.incorrectAnswer[2] || "<em>INDEFINIDA</em>"}</p>
                        <p>4- ${element.incorrectAnswer[3] || "<em>INDEFINIDA</em>"}</p>
                    </div>
                </div>

                <div class="explanationBox">
                    <p class="title">EXPLICACION</p>
                    <p class="content">${element.ex || "<em>INDEFINIDA</em>"}</p>
                </div>

            </div>


        </div>`

        
        if(quizesGeneratedInThisLoop === catalog_questsPerClick){
            resaltedMsg("AUN FALTAN QUIZES!")
            catalogPage.innerHTML += `
                <br/><Hr/><br/>
                <button class="generateQuestsBtn" id="catalog_generateBtn${catalog_generateClicks}" onclick="generateQuizes()">MOSTRAR MAS</button>`;
            quizesGeneratedInThisLoop = 0
        }
        
    }



}

function showCatalogQuestionDetails(i){
    appear(document.querySelector(`#quest${i}detailsBox`));
}
function removeCatalogQuestionDetails(i){
    disappear(document.querySelector(`#quest${i}detailsBox`));
}
function showCatalog(){
    clearAll()
    clearHTML(catalogPage);


    appear(catalogPage);

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
    clrConsoleText(`cat2(parcial) = ${mainFilters.cat2}`, 'black', 'aqua');
    console.log(`--------------------------------------`);

};
let selectedChoiceNumber = 0;
let selectedAnswer = undefined;
let pastSelectedAnswer = undefined;
function btnToNaturalStyle(btn){
    if(btn){
        btn.style.backgroundColor = "var(--main-clr)";
        btn.style.color = "var(--clr)";
        btn.style.borderColor = "var(--main-clr-2)";
    } else{
        console.log("NO EXISTE UNA RESPUESTE SELECCIONADA")
    }
}
function selectAnswer(choiceNumber) {

    btnToNaturalStyle(pastSelectedAnswer)

    pastSelectedAnswer = selectedAnswer;
    selectedAnswer = document.querySelector(`#choice${choiceNumber}`);

    selectedChoiceNumber = choiceNumber;
    console.log(selectedAnswer.value);

    btnToNaturalStyle(pastSelectedAnswer)

    document.querySelector(`#answerButtons > #choice${choiceNumber}`).style.backgroundColor = "var(--clr)";
    document.querySelector(`#answerButtons > #choice${choiceNumber}`).style.color = "var(--alt-clr)";
    document.querySelector(`#answerButtons > #choice${choiceNumber}`).style.borderColor = "var(--clr)";
    
}
/*[c] funcion para mostrar una nueva quest*/
function startQuest(){

    clrConsoleText(`startQuest()`, 'white', 'blue');
    
    clearAll()
    clearHTML(answerRevelationBox);
    clearHTML(questBox);

    appear(questSubmitBtn);
    appear(showExBtn);
    appear(questBox);
    appear(editQuestFloatBtn);

    let i = 0;
    let endLoop = false;
    let n = 0;
    let msg;

    //[c] LOOP PARA BUSCAR UN QUEST
    do{

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
            showMsg(`Cumple con los filtros`);

        }else if(!inHis & !selectedAsign & quizMonth <= selectedMonth){

            chooseActualElement();
            showMsg(`Cumple con el filtro de mes`);

        }else if(!inHis & quizAsign === selectedAsign & !selectedMonth){

            chooseActualElement();
            showMsg(`Cumple con el filtro de materia`);

        } else if(!inHis & !selectedAsign & !selectedMonth){

            chooseActualElement();
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

    const quest = questList[n];
    actualQuestN = n;
        
    success(`--> MOSTRANDO AHORA EL QUIZ NO: ${n}`);


    //[c] LOOP PARA ELEGIR LAS MULTIPLES RESPUESTAS DEL QUEST
    let possibleAnswerArray = []
    let answersHTML = ``;
    let posibleAnswerN = 0;
    function addAnswerOption(item){
        
        if (item) {
            possibleAnswerArray.push(item);
            posibleAnswerN++;
            answersHTML += 
            `<button class="btn choice" id="choice${posibleAnswerN}" value="${item}" onclick="selectAnswer(${posibleAnswerN})">${posibleAnswerN} - ${item}</button>`;
        }
        
    }
    const correctAnswerUbication = setRandomNumber(0,answersPerQuest+2);
    for (let i = 0; possibleAnswerArray.length <= answersPerQuest; i++) {

        let selectedAnswerId = setRandomNumber(0, answersPerQuest+1);
        let selectedAnswer = (i === correctAnswerUbication)?
            quest.answer:
            quest.incorrectAnswer[selectedAnswerId];

        console.log(`CICLO NO. ${i}...\n posible opcion: ${selectedAnswer}`);

        if(!possibleAnswerArray.includes(selectedAnswer) & selectedAnswer != "") addAnswerOption(selectedAnswer);
        

        if(i >= 200) break; //para evitar loops infinitos que congelan el dispositivo en caso de fallas.
        
    }
    console.log(`Answers: ${possibleAnswerArray} ... y el answersHTML: ${answersHTML}`);

    questBox.innerHTML +=`
        <p class="quizMsgBox"> ${msg} </p>
        <div class="quizBox">
            <p class="details">
                ${completeAsignatureName(quest.cat1) || "<em>sin materia</em>"} 
                - ${numberToPartial(quest.cat2) || "<em>sin parcial</em>"}
            </p>

            <hr>

            <div class="subBox">
                
                <p class="question">${quest.question || "<em>PREGUNTA INDEFINIDA</em>"}</p>
                <div id="answerButtons">
                    ${(answersHTML)? 
                        answersHTML: 
                        `<p class="simpleBox" style="border-color: var(--blue);">UH OH No encontre ninguna opcion</p>`
                    }
                </div>
            </div>
        </div>`;

    
    
};
function clearBtnsBar(){
    for (let i = 0; i < btnsBarBtns.length; i++) {
        const element = btnsBarBtns[i];
        disappear(element);
    }
    console.log("Se ha limmpiado la barra de btns");

    appear(homeBtn);
    window.scrollTo(0, 0);
}
function clearPageArea(){
    for (let i = 0; i < pageContent.length; i++) {
        const element = pageContent[i];
        disappear(element);
    }
    disappear(editQuestFloatBtn)
    window.scrollTo(0, 0);
    console.log("se ha limmpiado la pagina");
}
function clearAll(){
    clearBtnsBar()
    clearPageArea()
}




/*[c] VARIABLES */

let his = [];

let answersPerQuest = 3;
let actualQuestN;
let mainFilters = {
    cat1: undefined, // MATERIA
    cat2: undefined // PARCIAL
}

/*[c] EVENT LISTENERS */
startQuestBtn.addEventListener("click",startQuest); //empezar un quest...
nextQuestBtn.addEventListener("click",startQuest);
showExBtn.addEventListener("click", ()=> {

    appear(answerRevelationBox);
    answerRevelationBox.innerHTML = `
        <p class="simpleBox llamativeBorder"><strong>EXPLICACIÓN:</strong> <br/> ${questList[actualQuestN].ex || "No escribiste una para este quiz :/"}</p>`;

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

    appear(nextQuestBtn);
    appear(editFilterBtn);

    appear(answerRevelationBox);
    clearHTML(answerRevelationBox);
    btnToNaturalStyle(selectedAnswer);

    const n = actualQuestN;
    const quest = questList[n];

    const correctAnswer = quest.answer;

    let isCorrectAnswer = false;

    function showReveal( type, text ){
        answerRevelationBox.innerHTML += `<p class="simpleBox ${type}">${text}</p>`
    }
    function ex(){ 
        if(quest.ex != ""){
            showReveal("llamativeBorder",`<strong>EXPLICACIÓN:</strong> <br /> ${quest.ex}`)
        }  
    }

    if (!selectedAnswer) {

        console.log("NOOOOu")
        showReveal("failBorder", "NO RESPONDISTE :(");
        ex()

    } else{
        
        switch (selectedAnswer.value) {

        case correctAnswer: //si R correcta
            showReveal("successBorder", `<strong>EXCELENTE!</strong>`);
            ex();
            isCorrectAnswer = true;
            break;

        default: //si R es incorrecta
            console.log("seleccionaste: " + selectedChoiceNumber);
            showReveal("failBorder", `<strong>INCORRECTA, SIGUE INTENTANDO</strong><br/> 
                Respuesta correcta: '<em>${correctAnswer}</em>'`);
            ex();
            break;

    }
    }

    

    if(!correctAnswer){

        answerRevelationBox.innerHTML = `
        <hr style='margin-bottom: 25px' />
        <p class="simpleBox" style="border-color: var(--blue);">
            UH OH Alparecer no hay respuesta correcta
            <br/>
            <img src="./what.gif">
        </p>`

    }

    let color = (isCorrectAnswer)? "var(--green)" : "var(--red)";
    color = (correctAnswer)? color : "orange";
    if (selectedAnswer) {
        selectedAnswer.style.background = color;
        selectedAnswer.style.borderColor = color;
        selectedAnswer.style.color = "var(--main-clr)";
    };
    

    for(let i = 0; document.querySelectorAll(".choice")[i];i++){

        document.querySelectorAll(".choice")[i].disabled = true;

        const e = document.querySelectorAll(`.choice`)[i];
        if (e.value === correctAnswer) {
            e.style.background = "var(--green)";
            e.style.borderColor = "var(--green)";
            e.style.color = "var(--main-clr)";
            
        }
    }

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
            MATERIA: ${completeAsignatureName(e.cat1) || "indefinida"}. MES: ${numberToPartial(e.cat2)}.
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

advancedPageBtn.addEventListener("click", () => {openAdvancedPage()})

createQuestFloatBtn.addEventListener("click",openSetQuestPage)
editQuestFloatBtn.addEventListener("click", () => openEditQuestPage(actualQuestN))
homeBtn.addEventListener("click", home);

openWelcomePage();