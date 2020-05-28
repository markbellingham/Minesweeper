const grid = document.querySelector('.grid');
let width = 10;
let bombAmount = 20;
let squares = [];

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

        // normal click;
        square.addEventListener('click', function(e) {
            click(square);
        });
    }

    // add numbers
    for(let i = 0; i < squares.length; i++) {
        let total = 0;
        const isLeftEdge = i % width === 0;
        const isRightEdge = i % width === width - 1;

        if (squares[i].classList.contains('valid')) {
            if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total++;
            if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total++;
            if(i > 10 && squares[i-width].classList.contains('bomb')) total++;
            if(i > 11 && !isLeftEdge && squares[i-1-width].classList.contains('bomb')) total++;
            if(i < 98 && !isRightEdge && squares[i+1].classList.contains('bomb')) total++;
            if(i < 90 && !isLeftEdge && squares[i-1+width].classList.contains('bomb')) total++;
            if(i < 88 && !isRightEdge && squares[i+1+width].classList.contains('bomb')) total++;
            if(i < 89 && squares[i+width].classList.contains('bomb')) total++;
            squares[i].setAttribute('data', total);

        }
    }
}
createBoard();

// click on square actions
function click(square) {
    if(square.classList.contains('bomb')) {
        alert('Game Over!');
    }
}

function shuffle(a) {
    for(let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}