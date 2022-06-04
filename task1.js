var y;
var counter = 0;
var count = 0;
var level = 1;
const sequence = [];
var result = [];
let b;

// start the game
function startGame() {
    findNo();
    playRound(sequence);
}

// to select a random number and the add that 
function findNo() {
    let x = Math.floor((Math.random() * 16) + 1);
    console.log(x);
    y = x;
    sequence.push(y);
}


//to change the colour of the respective element , input 
function colorChange(b) {
    let colorButton = document.getElementById(b);
    colorButton.style.background = "white";
    setTimeout(() => { colorButton.style.background = "darkblue" }, 500);
}

// to check the click by the user and note if true or not 
function colorCheck(a) {
    result.push(a);
    count += 1;
    if (count == level) {
        nextRound()
    }
}

//to play any round , take the sequence as input and blinks for each respective element 
function playRound(newsequence) {
    newsequence.forEach((element, index) => {
        setTimeout(() => {
            colorChange(element);
        }, (index + 1) *700);
    });
    document.getElementById("level").innerHTML = level-1 ;
    document.getElementById("counter").innerHTML = counter ;
}

//to go to next round
function nextRound() {
    if (result.every((val, index) => val === sequence[index])) {
        counter += 1;
        console.log("level:" + level + ", counter" + counter + " next round")
        level += 1;
        findNo();
        playRound(sequence);
        count = 0;
        result = [];
    }
    else {
        window.alert("Game Over. Score : " + counter);
    }
}