const divContainer = document.querySelector('.div-container');
const range = document.querySelector('#pixels');
const pixelsDisplay = document.querySelector('#pixels-display');
const colorDOM = document.querySelector('#color');
const clearButton = document.querySelector('#clearButton');
const colorModeInput = document.querySelector('#color-mode-button');
const eraseModeInput = document.querySelector('#erase-mode-button');

let color = "#000";
let rows = 16;
let width = 960 / 16;
let height = 960 / 16;
let colorMode = true;
let eraseMode = false;

colorModeInput.style.backgroundColor = "#A1E8AF";

function setButtonColor(){
    colorMode ? colorModeInput.style.backgroundColor = "#A1E8AF" :
                colorModeInput.style.backgroundColor = "#fff";
    eraseMode ? eraseModeInput.style.backgroundColor = "#A1E8AF" :
                eraseModeInput.style.backgroundColor = "#fff";
}

colorModeInput.addEventListener('click',()=>{
    colorMode = true;
    eraseMode = false;
    setButtonColor();
});
eraseModeInput.addEventListener('click',()=>{
    colorMode = false;
    eraseMode = true;
    setButtonColor();
});

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
        div.id = i;
        div.addEventListener('mouseover',colorIt);
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
function colorIt(e){
    e.target.style.backgroundColor = color;
}

colorDOM.addEventListener('change',setColor);
function setColor(e){
    console.log(e.target.value);
    color = e.target.value;
}

clearButton.addEventListener('click',clearColor);

function clearColor(){
    boxList = divContainer.childNodes;
    boxList.forEach(box => {
        if(box.id !== undefined){
            box.style.backgroundColor = "#fff";
        }
    });
}