var score = 0
var cats = 0

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
}, 20000)

function loadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.score !== "undefined") score = savedGame.score;
    document.getElementById("score").innerHTML = score;
    if (typeof savedGame.cats !== "undefined") cats = savedGame.cats
}

function buyCat(){
    if (score >= 15) {
        score = score - 15;
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
