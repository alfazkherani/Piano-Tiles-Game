function blinkColor(){
    // let x = Math.floor((Math.random() * 16) + 1);
    let colorButton = document.getElementById('1');
    colorButton.style.background = black;
    setTimeout( () => {colorButton.style.background = white});
}