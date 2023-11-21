const divContainer = document.querySelector('.div-container');
const range = document.querySelector('#pixels');
const pixelsDisplay = document.querySelector('#pixels-display');

let rows = 16;
let width = 960 / 16;
let height = 960 / 16;

createDiv();
range.addEventListener("input",(e)=>{
    removeDiv();
    setRangeValue(e.target.value);
    displayPixels();
    setWidth();
    createDiv();
});
function createDiv(){
    for(let i = 0; i < (rows * rows); i++){
        div = document.createElement('div');
        div.setAttribute("style",`width:${width}px; height:${height}px;`);
        divContainer.appendChild(div);
    }
}
function displayPixels(){
    pixelsDisplay.textContent = rows +"x"+ rows;
}
function removeDiv(){
    divContainer.textContent = "";
}
function setRangeValue(value){
    rows = value;
}
function setWidth(){
    width = height = 960 / rows;
}
