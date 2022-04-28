const colorPicker = document.getElementById('colorPicker')
const rowsNumber = document.getElementById('inputHeight')
const columnNumber = document.getElementById('inputWidth')
const pixelCanvas = document.getElementById('pixelCanvas')
const form = document.getElementById('sizePicker')

// To create pixel art cells
form.addEventListener('submit', (e) => {
    e.preventDefault()
    pixelCanvas.innerHTML = ''
    makeGrid()
})

// To add/remove color
pixelCanvas.addEventListener('click', (e) => {
    if (e.target.nodeName === 'TD') {
        if (e.target.style.backgroundColor === '') { 
            e.target.style.backgroundColor = colorPicker.value;
        } else {
            e.target.style.backgroundColor = '';
        }
    }
})

// To create cells/grid
const makeGrid = () => {
    for (let i = 0; i < rowsNumber.value; i++) {
        const row = pixelCanvas.insertRow(0);
        for (let j = 0; j < columnNumber.value; j++) {
            row.insertCell(0)
        }        
    }
}