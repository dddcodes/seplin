let defaultQuests = [];
function setQuest(
    question = "QUIZ", 
    answer = "ANSWER", 
    incorrectAnswer = Array, 
    cat1 = string,cat2 = Boolean, ex = string,
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
});
questList = localStorage.getItem("quests");
questList = JSON.parse(questList);
for (let i = 0; i < defaultQuests.length; i++) {
    const element = defaultQuests[i];
    questList.push(element);
}
saveQuestsData();
console.log(questList);