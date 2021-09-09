function saveScore() {
    localStorage.setItem("score", score);
}
function updateScore() {
    score = score + 1;
    document.getElementById("score").innerHTML = "score: " + score;
}
function nextPage() {
    window.location = "index.html";
}
