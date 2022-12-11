const board = document.querySelector('#board');
const SQUARES_NUMBERS = 500;
const colors = ['rgb(235, 247, 14)', 'rgb(37, 247, 14)', 'rgb(14, 228, 247)', 'rgb(92, 14, 247)', 'rgb(247, 14, 177)', 'rgb(247, 14, 14)']

for (let i = 0; i < SQUARES_NUMBERS; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function removeColor(element) {
    element.style.backgroundColor = 'rgb(41, 40, 40)';
    element.style.boxShadow = '0 0 2px #000'
}