const colorPicker = document.getElementById('colorPicker')
const rowsNumber = document.getElementById('inputHeight')
const columnNumber = document.getElementById('inputWidth')
const pixelCanvas = document.getElementById('pixelCanvas')
const form = document.getElementById('sizePicker')
const tada = document.getElementsByTagName('td')

const makeGrid = () => {
    for (let i = 0; i < rowsNumber.value; i++) {
        const row = pixelCanvas.insertRow(0);
        for (let j = 0; j < columnNumber.value; j++) {
            row.insertCell(0)
        }        
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    pixelCanvas.innerHTML = ''
    makeGrid()
})

pixelCanvas.addEventListener('click', (e) => {
    if (e.target.nodeName === 'TD') {
        if (e.target.backgroundColor = colorPicker.value) {
          e.target.style.backgroundColor = "#fff";
        } 
    }
})

// tada.addEventListener('click', (e) => {
//     if (e.target.backgroundColor = colorPicker.value) {
//         e.target.style.backgroundColor = '#fff' 
//     }
// })
