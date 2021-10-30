const body = document.querySelector('body'),
      button = document.querySelector('.btn'),
      colorName = document.querySelector('.color-name');

function generateColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;
}

function changeColors() {
    const newColor = generateColor();
    button.style.color = newColor;
    colorName.innerHTML = newColor;
    body.style.background = newColor;   
}

button.addEventListener('click', changeColors);