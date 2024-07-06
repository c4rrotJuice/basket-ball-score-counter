let homeScore = document.getElementById("scoreHome");
let scores = 0;

function scored1Home(){
scores +=1;
homeScore.innerText = (scores);
}

function scored2Home(){
scores +=2;
homeScore.innerText = (scores);
}

function scored3Home(){
scores +=3;
homeScore.innerText = (scores);
}

let guestScore = document.getElementById("scoreGuest");
let scoresGuest = 0;

function scored1Guest(){
scoresGuest +=1;
guestScore.innerText = (scoresGuest);
}

function scored2Guest(){
scoresGuest +=2;
guestScore.innerText = (scoresGuest);
}

function scored3Guest(){
scoresGuest +=3;
guestScore.innerText = (scoresGuest);
}

function newGame(){
    guestScore.innerText = 0;
    homeScore.textContent = 0;
}