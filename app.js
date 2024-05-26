const decreaseBtn = document.getElementById("decrease")
const resetBtn = document.getElementById("reset")
const increaseBtn = document.getElementById("increase")
const countLabel = document.getElementById("countLabel")
let count = 0;

increase.onclick = function () {
    count++
    countLabel.textContent = count;

}

decrease.onclick = function () {
    count--
    countLabel.textContent = count;

}

reset.onclick = function () {
    count = 0
    countLabel.textContent = count;

}