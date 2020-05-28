const grid = document.querySelector('.grid');
let width = 10;
let bombAmount = 20;
let squares = [];
let total = 0;

// create board
function createBoard() {
    // get shuffled game array with random bombs
    const bombsArray = Array(bombAmount).fill('bomb');
    const emptyArray = Array(width*width-bombAmount).fill('valid');
    const gameArray = emptyArray.concat(bombsArray);
    const shuffledArray = shuffle(gameArray);

    for(let i = 0; i < width*width; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i.toString());
        square.classList.add(shuffledArray[i]);
        grid.appendChild(square);
        squares.push(square);
    }
}
createBoard();

function shuffle(a) {
    for(let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}