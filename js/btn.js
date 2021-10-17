var count = 0;

function inc() {
    count++;
    document.getElementById("count-value").textContent = count;
}

function dec() {
    count--;
    document.getElementById("count-value").textContent = count;
}