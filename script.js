
var score = 0


window.onload = function(){
    loadGame();
}

function addScore(amount){
    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

function saveGame(){
    var gameSave = {
        score : score
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
}
