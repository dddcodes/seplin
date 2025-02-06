

/*UTILIES*/


function setRandomNumber(min = 1, max = 10){         
    return Math.floor(Math.random() * ( max - min) ) + min
};
function REFRESH(){
    window.scrollTo(0, 0);
    clearAll()
    openWelcomePage();
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
    if(!localStorage.getItem(itemName)){

        localStorage.setItem(itemName, "[]");
        console.log(`[LS] se creo '${itemName}' en el LS`);
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
function RESET(){
    localStorage.removeItem("quests");
}; //BORRA EL LOCAL STORAGE, ELIMINANDO TODO DATO GUARDADO PERMANENTEMENTE