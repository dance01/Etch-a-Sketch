const container = document.querySelector("#container"); //selector of divs
const numberPixel = document.querySelector('#pixelNumber'); //selector of button
const clearBtn = document.querySelector('#clearBtn');
const rgbColor = document.querySelector('#rgbColor');
const bwColor = document.querySelector('#bwColor');

createGrid(16); //grid by default
colorGrid();


clearBtn.addEventListener('click', clearGrid);
rgbColor.addEventListener('click', colorRgbGrid);
bwColor.addEventListener('click', colorGrid);
numberPixel.addEventListener('click', () => {
    let num = prompt('how many pixel you want?');
    while (num > 64) num = prompt('choose a number equal or less than 64');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(num);
    colorGrid();
});

function colorRgbGrid(){
    
    let cell = document.querySelectorAll(".cell")
    cell.classList.toggle('active');
    cell.forEach((cell) =>{
    cell.addEventListener('mouseover', colorCellRgb);
        function colorCellRgb(){
                cell.style.opacity = 1;
                if (cell.style.background == 'rgb(0, 0, 0)'){
                cell.style.background = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
                }else{
                    cell.style.background = cell.style.background;
                }
        }
    });
}
function colorGrid(){
    let cell = document.querySelectorAll(".cell");
    cell.forEach((cell) =>{
    cell.addEventListener('mouseover', colorCell);
        function colorCell(){
            // cell.style.background = 'rgb(0, 0, 0)'
            if (cell.style.opacity == 1){
                cell.style.opacity == 1
            }else{
            cell.style.opacity = parseFloat(cell.style.opacity) + .1;
            }
        };
    });
}

function createGrid(n){
    let flex = (960-(n*2))/n;
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

function clearGrid(){
    const cell = document.querySelectorAll(".cell");
    cell.forEach((cell) =>{
        cell.style.opacity = 0;
    });

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }