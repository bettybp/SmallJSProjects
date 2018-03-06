const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
console.log(moles)
const scoreBoards = document.querySelector('.score');
let score = 0;
let lastHole;
let timeUp = false;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(){

    let idx = Math.floor(Math.random() * holes.length);
    let hole = holes[idx];
    if(hole==lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function show(){
    let time = randomTime(600,1000);
    let hole = randomHole();
    hole.classList.add('up');
    setTimeout(()=>{hole.classList.remove('up'); if(!timeUp) show();},time);
}
function startGame(){
    score = 0;
    timeUp = false;
    show();
    setTimeout(()=>timeUp=true,10000);
}
function hit(event){
    ++score;
    //hide the picture of the mole
    this.parentNode.classList.remove('up');
    scoreBoards.textContent = score;
}
moles.forEach(mole=>{mole.addEventListener('click',hit)});

