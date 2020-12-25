const gridSpaces = document.querySelectorAll(".space");
const grid = document.querySelector(".grid-layout");
const msg = document.querySelector(".msg");
gridSpaces.forEach((gridSpace) => gridSpace.addEventListener("click",onPress));
let playable = true;
let current = 0;
let move = "X";


function onPress(e){
    if(playable){
        e.preventDefault();
        if(e.srcElement.innerHTML === ""){
            e.srcElement.classList.add(move);
            e.srcElement.innerHTML = move;
            current++;
            checkWin();
            if(move === "X"){
                move = "O";
            }else{
                move = "X";
            }
            
        }
    }else{
        gridSpaces.forEach((gridSpace) => gridSpace.innerHTML ="");
        msg.innerHTML = "";
        playable = true;
    }
}

function checkWin(){
    let checkGrid = [];
    let count = 0;
    //Loop through the grid and assign the HTML to a new array
    gridSpaces.forEach(function (gridSpace){
        checkGrid[count] = gridSpace.innerHTML;
        count++;
    });
    if(Math.abs(checkRow(checkGrid,0)) == 3){
        msg.innerHTML = "Player " + move + " Wins!";
        playable = false;
    }
    else if(Math.abs(checkRow(checkGrid,3)) == 3){
        msg.innerHTML = "Player " + move + " Wins!";
        playable = false;
    }
    else if(Math.abs(checkRow(checkGrid,6)) == 3){
        msg.innerHTML = "Player " + move + " Wins!";
        playable = false;
    }
    else if(Math.abs(checkColumn(checkGrid,0)) == 3){
        msg.innerHTML = "Player " + move + " Wins!";
        playable = false;
    }
    else if(Math.abs(checkColumn(checkGrid,1)) == 3){
        msg.innerHTML = "Player " + move + " Wins!";
        playable = false;
    }
    else if(Math.abs(checkColumn(checkGrid,2)) == 3){
        msg.innerHTML = "Player " + move + " Wins!";
        playable = false;
    }else if(Math.abs(checkDiag(checkGrid,0)) == 3){
        msg.innerHTML = "Player " + move + " Wins!";
        playable = false;
    }else if(Math.abs(checkDiag(checkGrid,2)) == 3){
        msg.innerHTML = "Player " + move + " Wins!";
        playable = false;
    }else if(checkGridFull(checkGrid)){
        msg.innerHTML = "Tie";
        playable = false;
    }

    
}

function checkRow(grid,start){
    let sum = 0;
    for(let i = start; i < 3 + start; i ++){
        if(grid[i] === "O"){
            sum--;
        }else if(grid[i] === "X"){
            sum++;
        }
    }
    return sum;
}
function checkColumn(grid,start){
    let sum = 0;
    for(let i = start; i < 7 + start; i += 3){
        if(grid[i] === "O"){
            sum--;
        }else if(grid[i] === "X"){
            sum++;
        }
    }
    return sum;
}

function checkDiag(grid,start){
    let sum = 0;
    if(start === 0){
        for(let i = 0; i < 9; i +=4){
            if(grid[i] === "X"){
                sum++;
            }else if(grid[i] === "O"){
                sum--;
            }
        }
    }else{
        for(let i = 2; i < 7; i +=2){
            if(grid[i] === "X"){
                sum++;
            }else if(grid[i] === "O"){
                sum--;
            }
        }
    }
    return sum;
}

function checkGridFull(grid){
    for(let i = 0; i < 9; i ++){
        if(grid[i] == ""){
            return false;
        }
    }
    return true;
}