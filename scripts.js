var score = 0
const totalCount = document.getElementById("score")


totalCount.innerHTML = score;

function updateScore() {
    score++;
    totalCount.innerHTML = score;
};

totalCount.addEventListener("click", updateScore)