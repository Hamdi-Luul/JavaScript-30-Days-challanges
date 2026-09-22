
const display = document.getElementById('count')
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let count = 0;
increaseBtn.addEventListener('click', increase)
decreaseBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

function increase() {
    count++
    display.textContent = count
}
function decrease() {
    if (count > 0) {
        count--

    }

    display.textContent = count
}
function reset() {
    count = 0
    display.textContent = count
}
