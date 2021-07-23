const dodger = document.getElementById('dodger')

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener('keydown', function(e){
    if (e.key === "a") {
        moveDodgerLeft();
        console.log('moving left')
    }
});

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === "s") {
        moveDodgerRight();
        console.log('moving right')
    }
})