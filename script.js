const container = document.querySelector("#container"); //selector of divs
const numberPixel = document.querySelector('#pixelNumber'); //selector of button
const clearBtn = document.querySelector('#clearBtn');
const rgbColor = document.querySelector('#rgbColor');
const bwColor = document.querySelector('#bwColor');

createGrid(16); //grid by default
bwGrid();
function createGrid(n){
    let flex = (960)/n;
    for (let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            const div = document.createElement('div');
            div.classList.add('cell');
            container.appendChild(div);
        };
    };
    const cell = document.querySelectorAll(".cell");
    cell.forEach((cell) =>{
        cell.style.background = 'rgb(0, 0, 0)';
        cell.style.opacity = 0
        cell.style.flexBasis = `${flex}px`;
    });
}
//  user input changes grid
numberPixel.addEventListener('click', () => {
    let num = prompt('how many pixel you want?');
    while (num > 64) num = prompt('choose a number equal or less than 64');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(num);
    bwGrid();
});

bwColor.addEventListener('click', () => {
    clearGrid();
    removeListeners();
    bwGrid();
});

function bwGrid(){
    const cell = document.querySelectorAll(".cell");
    cell.forEach((cell) =>{
    cell.addEventListener('mouseover', bw);
    });
}

function bw(event){
    let cell = event.target;
    cell.style.background = 'rgb(0, 0, 0)'
    if (cell.style.opacity == 1){
        cell.style.opacity == 1
    }else{
    cell.style.opacity = parseFloat(cell.style.opacity) + .1;
    }
};

rgbColor.addEventListener('click', () => {
    clearGrid();
    removeListeners();
    colorRgbGrid();
});

function colorRgbGrid(){
    let cell = document.querySelectorAll(".cell");
    cell.forEach((cell) => {
    cell.addEventListener('mouseover', rgb)});
}
    
function rgb(event){
    let cell = event.target;
    cell.style.opacity = 1;
if (cell.style.background == 'rgb(0, 0, 0)'){
    cell.style.background = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
}
}

function removeListeners() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.removeEventListener('mouseover', bw);
        cell.removeEventListener('mouseover', rgb);
    });
}

clearBtn.addEventListener('click', () => clearGrid());

function clearGrid(){
    const cell = document.querySelectorAll(".cell");
    cell.forEach((cell) =>{
        cell.style.background = 'rgb(0, 0, 0)';
        cell.style.opacity = 0
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }