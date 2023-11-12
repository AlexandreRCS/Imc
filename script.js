const form = document.querySelector('form')
const weightInput = document.querySelector('#weight')
const heightInput = document.querySelector('#height')


form.onsubmit = function(event){
    event.preventDefault()
    
    const weight = weightInput.value
    const height = heightInput.value

    console.log(weight, height)
}