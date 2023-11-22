const divContainer = document.querySelector('.div-container');
const range = document.querySelector('#pixels');
const pixelsDisplay = document.querySelector('#pixels-display');
const colorDOM = document.querySelector('#color');
const clearButton = document.querySelector('#clearButton');
const colorModeInput = document.querySelector('#color-mode-button');
const eraseModeInput = document.querySelector('#erase-mode-button');
const rainbowModeInput = document.querySelector('#rainbow-mode-button')

let color = "#000";
let rows = 16;
let width = 960 / 16;
let height = 960 / 16;
let colorMode = true;
let eraseMode = false;
let rainbowMode = false;

colorModeInput.style.backgroundColor = "#A1E8AF";

function setButtonColor(){
    colorMode ? colorModeInput.style.backgroundColor = "#A1E8AF" :
                colorModeInput.style.backgroundColor = "#fff";
    eraseMode ? eraseModeInput.style.backgroundColor = "#A1E8AF" :
                eraseModeInput.style.backgroundColor = "#fff";
    rainbowMode ? rainbowModeInput.style.backgroundColor = "#A1E8AF" :
                  rainbowModeInput.style.backgroundColor = "#fff";
}

colorModeInput.addEventListener('click',()=>{
    colorMode = true;
    eraseMode = false;
    rainbowMode = false;
    setButtonColor();
    color = colorDOM.value;
});
eraseModeInput.addEventListener('click',()=>{
    colorMode = false;
    eraseMode = true;
    rainbowMode = false;
    setButtonColor();
    color = "#fff";
});
rainbowModeInput.addEventListener('click',()=>{
    colorMode = false;
    eraseMode = false;
    rainbowMode = true;
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
    if(rainbowMode){
        // let rainbowColors = ["#FF0000","#FFA500","#FFFF00","#008000",
        //                     "#0000FF","#4B0082","#EE82EE"];
        // let randomIndex = Math.floor(Math.random() * rainbowColors.length - 1);
        // e.target.style.backgroundColor = rainbowColors[randomIndex];
        var redValue = Math.floor(Math.random()*255);
        var greenValue = Math.floor(Math.random()*255);
        var blueValue = Math.floor(Math.random()*255);
        e.target.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
    }
    else{
        e.target.style.backgroundColor = color;
    }
}

colorDOM.addEventListener('change',setColor);
function setColor(e){
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

