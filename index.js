let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function addHomeScore(num) {
    homeScore.innerText = parseInt(homeScore.textContent) + num;
}

function addGuestScore(num) {
    guestScore.innerText = `${parseInt(guestScore.textContent) + num}`;
}