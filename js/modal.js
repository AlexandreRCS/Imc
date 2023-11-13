export const Modal ={
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


Modal.BtnClose.onclick = function(){
    Modal.close()
 }
 
 Modal.Wrapper.addEventListener('click', function(){
     Modal.close()
 })

window.addEventListener('keydown', handleesc)

 function handleesc(event){
    
    if(event.key == 'Escape'){
        Modal.close()
    }
 }