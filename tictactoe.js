const size = 3;
let winners = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
//count the moves
let Xcount = 0;
let Ycount = 0;
//cells selected by players
let Xcells = [];
let Ycells = [];
//indicates who has to play
//1 - X
//0 - O
let hasToPlay = 1;

function drawBoard(size){
    let indexCell = 1;
    let parent = document.getElementById('game-container');
    let tbl = document.createElement('table');
    tbl.classList.add("my-table")
    tbl.id = 'board';

    for(let i = 0; i < size; ++i){

        let row = document.createElement('tr');

        for(let j = 0; j < size; ++j){

            let col = document.createElement('td');
            col.id = indexCell;
            ++indexCell;
            row.appendChild(col);

        }
        tbl.appendChild(row);
    }
    parent.appendChild(tbl);
};

function play(){
    document.getElementById('board').addEventListener('click',(event)=>{

        if(hasToPlay==1){

            event.target.innerHTML = 'X';
            Xcount ++;
            Xcells.push(parseInt(event.target.id));

            if(Xcount >= size) {
                checkWin(Xcells);
            }
            hasToPlay = 0;
        }
        else{

            event.target.innerHTML = 'O';
            Ycount++;
            Ycells.push(parseInt(event.target.id));

            if(Ycount >= size){
                checkWin(Ycells);
            }
            hasToPlay = 1;
        }
    })
}

function checkWin(playerMoves){
    let found = false;
    for(let i = 0; i < winners.length; ++i){
        if(winners[i].every((element)=>{return playerMoves.includes(element) == true})) {
            found = true;
            resultsAndPlayAgain('Congrats!! You won!!');
        }
    }
    if(Xcount+Ycount == size*size && !found){
        resultsAndPlayAgain('Nobody won!');
    }

}

function resultsAndPlayAgain(congrats) {
    let parent = document.getElementById('afterMatch');
    let msg = document.createElement('h4');
    msg.innerHTML = congrats;
    parent.appendChild(msg);
    let button = document.createElement('button');
    button.className = 'btn';
    button.innerHTML = 'Again'
    parent.appendChild(button);
    button.addEventListener('click',()=>{location.reload()});
}

drawBoard(size);
play();