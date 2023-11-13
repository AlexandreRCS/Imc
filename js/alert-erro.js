export const alertErro = {
    element: document.querySelector('.alert-erro'),
    open(){
        alertErro.element.classList.add('open')
    },

    close(){
        alertErro.element.classList.remove('open')
    }
}