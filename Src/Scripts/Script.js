
/*[c] FUNCIONES */
let defaultQuests = [];
function setQuest(question = "Question", answer ="Answer", 
    incorrectAnswer = [], 
    cat1 ="",cat2 =0, ex ="",
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

    setQuest(
        "Es el proceso por el cual, a partir de luz, CO2 y agua, una planta produce Oxigeno y glucosa:",
        "Fotosíntesis",
        ["Respiración celular", "ATP", "Nutrición Holozoica"],
        "ecs",
        2,
        "La fotosíntesis es el proceso por el cual las plantas producen glucosa y oxígeno utilizando CO2, agua y luz.",
        true
    );
    setQuest(
        "¿Cuál de los siguientes organelos lleva a cabo la digestión celular?",
        "Lisosoma",
        ["Mitocondria", "Membrana Plasmática", "Aparato de Golgi"],
        "ecs",
        2,
        "Los lisosomas son organelos encargados de descomponer materiales en la célula.",
        true
    );
    setQuest(
        "Es la función de los ribosomas en la célula:",
        "Llevan a cabo la síntesis de proteínas",
        ["En ella se realiza el proceso de la fotosíntesis", "Contiene la información genética de la célula", "En este organelo se lleva a cabo la división celular"],
        "ecs",
        2,
        "Los ribosomas son responsables de sintetizar proteínas en la célula.",
        true
    );
    setQuest(
        "En el proceso de respiración celular ¿cuáles son los productos?",
        "CO2, H2O y ATP",
        ["Glucosa y H2O", "Glucosa y O2", "O2 y ATP"],
        "ecs",
        2,
        "La respiración celular produce CO2, agua y ATP, utilizando glucosa y oxígeno.",
        true
    );
    setQuest(
        "Es la principal función de las proteínas en el ser humano:",
        "Son necesarias para el funcionamiento celular, el crecimiento y el desarrollo normales.",
        ["Proporcionan energía, forman parte del tejido conectivo y nervioso", "Fortalecen músculos, piel y huesos, realizan la mayor parte del trabajo celular, creando nuevas células y reparando las dañadas", "Almacenan información genética, la cual será trasmitida de padres a hijos"],
        "ecs",
        2,
        "Las proteínas son esenciales para el crecimiento, desarrollo y mantenimiento celular.",
        true
    );
    setQuest(
        "Es el tipo de fermentación en donde se produce etanol y dióxido de carbono como productos de desecho:",
        "Alcohólica",
        ["Acética", "Láctica", "Butírica"],
        "ecs",
        2,
        "La fermentación alcohólica produce etanol y dióxido de carbono.",
        true
    );
    setQuest(
        "¿A qué tipo de factores corresponden los elementos del siguiente listado? 1) Flora 2) Fauna 3) Productores 4) Consumidores",
        "Bióticos",
        ["Físicos", "Químicos", "Abióticos"],
        "ecs",
        2,
        "Los factores bióticos incluyen organismos vivos, como flora, fauna y consumidores.",
        true
    );
    setQuest(
        "Es el tipo de Bioma terrestre que se caracteriza por bajas temperaturas, suelos congelados y escasa vegetación.",
        "Tundra",
        ["Taiga", "Bosque húmedo", "Desierto polar"],
        "ecs",
        2,
        "La tundra tiene suelos congelados y baja vegetación debido a las bajas temperaturas.",
        true
    );
    setQuest(
        "Bioma que se localiza al sur de Veracruz, parte de Oaxaca, Chiapas y Tabasco, en donde habitan el Jaguar y Mono araña, entre otros:",
        "Bosque húmedo",
        ["Bosque tropical", "Bosque Caducifolio", "Bosque de coníferas"],
        "ecs",
        2,
        "El bosque húmedo tropical de México es hogar de especies como el jaguar y el mono araña.",
        true
    );
    setQuest(
        "Corresponde al último nivel de la red trófica terrestre formado por hongos y bacterias heterótrofas:",
        "Descomponedores",
        ["Productores", "Consumidores Primarios", "Consumidores secundarios"],
        "ecs",
        2,
        "Los descomponedores como hongos y bacterias reciclan los nutrientes en los ecosistemas.",
        true
    );
    setQuest(
        "Tipo de biomasa producida por la naturaleza sin la intervención humana:",
        "Natural",
        ["Seca", "Residual húmeda", "Biocarburantes"],
        "ecs",
        2,
        "La biomasa natural se genera sin intervención humana, como restos de plantas y animales.",
        true
    );
    setQuest(
        "Tipo de biomasa la cual se mide por la cantidad de carbono, componente primario de estos organismos y en una de sus clasificaciones están los artrópodos.",
        "De animales",
        ["De Plantas", "De Hongos", "De Virus"],
        "ecs",
        2,
        "La biomasa animal incluye organismos como los artrópodos que son ricos en carbono.",
        true
    );
    setQuest(
        "Son las principales responsables de almacenar 450 Gt de carbono, es decir el 80% del total, son las productoras primarias de todo ecosistema normal.",
        "Plantas",
        ["Bacterias", "Arqueas", "Protistas"],
        "ecs",
        2,
        "Las plantas almacenan la mayor parte del carbono en los ecosistemas.",
        true
    );
    setQuest(
        "Esta ley consiste en el paso de energía solo del 10% de un nivel trófico a otro en un ecosistema.",
        "Del diezmo",
        ["De la entropía", "De la conservación", "De la entalpía"],
        "ecs",
        2,
        "La ley del 10% describe cómo la energía disminuye al pasar de un nivel trófico a otro.",
        true
    );
    setQuest(
        "Son factores que limitan la producción primaria y/o bruta.",
        "Temperatura y humedad",
        ["CO2 y Glucosa", "Oxígeno y Humedad", "Temperatura y Glucosa"],
        "ecs",
        2,
        "La temperatura y la humedad son factores que influyen en la producción primaria.",
        true
    );
    setQuest(
        "Identifica qué característica de la población corresponde el siguiente texto: ‘Indica el número de nacimientos ocurridos en una población en un intervalo de tiempo’.",
        "Tasa de natalidad",
        ["Densidad", "Potencial biótico", "Distribución de edades"],
        "ecs",
        2,
        "La tasa de natalidad mide los nacimientos en una población en un periodo determinado.",
        true
    );
    setQuest(
        "Lea con atención el siguiente texto, y responde la pregunta: ‘Estos factores detienen el incremento poblacional sin depender de la densidad, es decir, disminuyen la natalidad y aumentan la mortalidad. Se involucran factores abióticos tales como la precipitación pluvial, sequía e inundaciones. También incluye la destrucción de hábitats que el hombre produce, incluyendo el uso de plaguicidas’. ¿A qué tipo de factores se hace referencia?",
        "Densoindependientes",
        ["Densodependientes", "Extrínsecos", "Intrínsecos"],
        "ecs",
        2,
        "Los factores densoindependientes no dependen de la densidad de la población y afectan la natalidad y mortalidad.",
        true
    );
    setQuest(
        "Lea con atención la siguiente información y selecciona la opción correcta que represente dos características del crecimiento poblacional. 1) Incremento del número de población. 2) Cambio climático. 3) Calidad y disponibilidad de los recursos naturales. 4) La suma entre el potencial biótico y la resistencia ambiental 5) Explotación de los recursos naturales. 6) Nivel tecnológico.",
        "1,6",
        ["3,5", "1,4", "2,4"],
        "ecs",
        2,
        "El crecimiento poblacional se ve influenciado por la disponibilidad de recursos y el nivel tecnológico.",
        true
    );
    setQuest(
        "Lee con atención el siguiente enunciado: ‘Se produce un mayor aprovechamiento y el ecosistema se vuelve más complejo’. ¿A qué tendencia de sucesión ecológica corresponde?",
        "Aumento de la biodiversidad",
        ["Aumento progresivo de la biomasa", "Aumento de la producción primaria", "Aumento de los nichos ecológicos"],
        "ecs",
        2,
        "En la sucesión ecológica, un ecosistema más maduro muestra un aumento en la biodiversidad.",
        true
    );
    setQuest(
        "Este tipo de regresión puede ocurrir a partir de la escorrentía o de la eliminación de desechos de sustancias químicas, o de fuentes de energía. ¿A qué regresión nos referimos?",
        "Contaminación",
        ["Cambio de uso de suelo", "Especies introducidas", "Explotación de recursos"],
        "ecs",
        2,
        "La contaminación afecta negativamente a los ecosistemas al introducir sustancias químicas y energía.",
        true
    );
    setQuest(
        "Las características tales como: La energía solar es el motor principal que lo impulsa, mantiene un equilibrio natural, contribuye al transporte de nutrientes y mantiene la humedad esencial para preservar la vida en los ecosistemas, pertenecen al:",
        "Ciclo del agua",
        ["Ciclo del Carbono", "Ciclo del Nitrógeno", "Ciclo del Fosforo"],
        "ecs",
        2,
        "El ciclo del agua es fundamental para mantener la humedad en los ecosistemas y apoyar la vida.",
        true
    );
    setQuest(
        "El ciclo del carbono comprende el intercambio rápido de carbono entre los organismos vivos y a través de los procesos geológicos a largo plazo, ¿cuál es la característica que lo identifica?",
        "Participa en los procesos de fotosíntesis y respiración celular",
        ["Es el elemento más abundante de la atmósfera con un porcentaje de 79%", "Se usa en fertilizantes", "Forma parte de los ciclos biogeoquímicos sedimentarios"],
        "ecs",
        2,
        "El carbono es esencial para la vida y participa en los procesos de fotosíntesis y respiración celular.",
        true
    );
    setQuest(
        "Para que el nitrógeno pueda ser asimilado por las plantas este debe ser convertido primero en nitratos o nitritos que es la forma asimilable del nitrógeno para los seres vivos y este proceso es llevado a cabo por bacterias, ¿cuál es la característica que lo identifica?",
        "Es asimilado por las plantas e incorporado a sus tejidos en forma de proteínas vegetales",
        ["Participa en los procesos de fotosíntesis y respiración celular", "Forma parte de los ciclos biogeoquímicos sedimentarios", "Es el elemento menos abundante de la atmósfera"],
        "ecs",
        2,
        "El nitrógeno debe ser fijado en formas asimilables como nitratos y nitritos para ser utilizado por las plantas.",
        true
    );
    setQuest(
        "El Fosforo es un nutriente esencial para los seres vivos, pero es el que se encuentra en menor cantidad; ¿cuál es la característica que lo identifica?",
        "En la naturaleza es a menudo el nutriente limitante",
        ["Es una parte fundamental de los aminoácidos", "Es un nutriente que forma parte de los ciclos biogeoquímicos gaseosos", "Es el elemento más abundante de la atmósfera con un porcentaje de 79%"],
        "ecs",
        2,
        "El fósforo es esencial para la formación de ADN y ARN, y es a menudo el nutriente limitante en los ecosistemas.",
        true
    );
    setQuest(
        "Parte del azufre presente en los organismos vivos queda en los suelos cuando éstos mueren. La descomposición de la materia orgánica produce ácido sulfhídrico de mal olor. ¿Cuál es la característica que lo identifica?",
        "Llega a la tierra con las lluvias en forma de sulfatos y sulfitos",
        ["Forma amonio y nitratos", "Se convierte en piedra caliza", "Se obtiene como producto de la fotosíntesis"],
        "ecs",
        2,
        "El azufre se encuentra en la atmósfera y el suelo, y llega a la tierra a través de las lluvias en forma de sulfatos.",
        true
    );
    setQuest(
        "Los beneficios como hábitats, calidad del aire y agua, regulación del clima y la polinización, son los que aportan los ecosistemas a los seres humanos para realizarse en todas sus facetas, ¿Cuáles son los servicios que proporcionan dichos beneficios?",
        "Soporte, aprovisionamiento, regulación y cultural",
        ["Soporte, logístico, regulación y cultural", "Soporte, regulación, aprovisionamiento y social", "Soporte, regulación, aprovisionamiento y económico"],
        "ecs",
        2,
        "Los ecosistemas proporcionan beneficios esenciales como hábitats, purificación del aire y agua, y regulan el clima.",
        true
    );
    setQuest(
        "El desarrollo sustentable está enfocado únicamente en los recursos naturales y el medio ambiente y el desarrollo sostenible busca asegurar procesos saludables para satisfacer las necesidades sociales y económicas de los seres humanos mediante los objetivos globales que son:",
        "Fin de la pobreza, salud y bienestar, igualdad de género y acción por el clima",
        ["Religión, salud y bienestar, igualdad de género y acción por el clima", "Religión, educación de calidad, igualdad de género y acción por el clima", "Religión, salud y bienestar, igualdad de género y hambre cero"],
        "ecs",
        2,
        "El desarrollo sostenible busca cumplir con objetivos globales como erradicar la pobreza y promover la salud y el bienestar.",
        true
    );
    setQuest(
        "Los cambios en las temperaturas globales, los patrones de precipitación y la frecuencia de eventos climáticos extremos como huracanes, sequías e inundaciones, tienen un impacto profundo en la distribución y supervivencia de las especies. Selecciona la causa principal del desequilibrio ecológico:",
        "Cambios Climáticos",
        ["Actividades Humanas", "Políticas ambientales", "Acuerdos internacionales"],
        "ecs",
        2,
        "El cambio climático afecta el equilibrio de los ecosistemas y la distribución de las especies.",
        true
    );
});

});
let questList = localStorage.getItem("quests");
questList = JSON.parse(questList);
for (let i = 0; i < defaultQuests.length; i++) {
    const element = defaultQuests[i];
    questList.push(element);
}
saveQuestsData();
console.log(questList);

const hisLimit = (questList.length > 5)? 0.6 * questList.length: 2;


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

createQuestFloatBtn.addEventListener("click",openSetQuestPage)
editQuestFloatBtn.addEventListener("click", () => openEditQuestPage(actualQuestN))
homeBtn.addEventListener("click", home);

openWelcomePage();
