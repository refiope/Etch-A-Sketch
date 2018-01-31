let container = document.querySelector('.container');
let reset = document.querySelector('#reset');
let resize = document.querySelector('#resize');
//Initialize squares ex.(16*16)
function Initialize(sqNumber)
{
  let length = Math.floor(800/sqNumber);
  let width = length.toString() + 'px';
  let height = length.toString() + 'px';

  for (let i = 0; i < (sqNumber*sqNumber); i++)
  {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    square.style.width = width;
    square.style.height= height;
  }
}


function addEvent ()
{
  let squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.classList.add('hover');
    })
  });
  reset.addEventListener('click', () => {
    squares.forEach((square) => {
      square.classList.remove('hover');
    });
  });
}

function resizeBoard ()
{
  resize.addEventListener('click', () =>{
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.remove();
    });
    let userInput = prompt("Type number");
    Initialize(userInput);
    addEvent();
  });
}

Initialize(16);
addEvent();
resizeBoard();
