import {Modal} from './modal.js'
import { alertErro } from './alert-erro.js'
import { notNumber, calculoImc } from './utils.js'


const form = document.querySelector('form')
const weightInput = document.querySelector('#weight')
const heightInput = document.querySelector('#height')




form.onsubmit = function(event){
    event.preventDefault()
    
    const weight = weightInput.value
    const height = heightInput.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightIsNotANumber){
        alertErro.open()
        return
    }

    alertErro.close()
    
    const imc = calculoImc(weight, height)
    
    let messege =  `O seu IMC é ${imc}`
    
    Modal.open()
    
    
    Modal.Message.innerText = messege

}

weightInput.oninput = () => alertErro.close()
heightInput.oninput = () => alertErro.close()

