const form = document.querySelector('form')
const weightInput = document.querySelector('#weight')
const heightInput = document.querySelector('#height')

const Modal ={
    Wrapper : document.querySelector('.modal-wrapper'),
    Message : document.querySelector('h2'),
    BtnClose : document.querySelector('#btn-close'),
    open(){
        Modal.Wrapper.classList.add('open')
    },
    close(){
        Modal.Wrapper.classList.remove('open')
    }
}
form.onsubmit = function(event){
    event.preventDefault()
    
    const weight = weightInput.value
    const height = heightInput.value
    
    imc = 0
    
    imc = calculoImc(weight, height)
    
    let messege =  `O seu IMC é ${imc}`
    
    Modal.open()
    
    
    Modal.Message.innerText = messege

}



function calculoImc(weight, height){
    let imc = 0

    imc =   weight / (height / 100 * 2)

    return imc.toFixed()
}



Modal.BtnClose.onclick = function(){
   Modal.close()
}

Modal.Wrapper.addEventListener('click', function(){
    Modal.close()
})