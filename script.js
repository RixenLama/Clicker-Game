var score = 0
var cats = 0
var catPrice = 15

window.onload = function(){
    loadGame();
}

function addScore(amount){
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

function saveGame(){
    var gameSave = {
        score : score,
        cats : cats
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

setInterval (function (){
    saveGame();
}, 2000)

function loadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.score !== "undefined") score = savedGame.score;
    document.getElementById("score").innerHTML = score;
    if (typeof savedGame.cats !== "undefined") cats = savedGame.cats
    if (typeof savedGame.catPrice !== "undefined") catPrice = savedGame.catPrice
}

function buyCat(){
    if (score >= catPrice) {
        score = score - catPrice;
        catPrice = catPrice * 1.2; 
        cats = cats + 1;
        document.getElementById("score").innerHTML = score;
    } else {
        window.alert("Not enough points");s
    }
}

setInterval (catAbility, 1000)  

function catAbility(){
    if (cats >= 1){
    score = score + 2 * cats;
    document.getElementById("score").innerHTML = score;
    }
}
