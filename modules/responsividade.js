export default function responsividade(elementModal, btn){
    const telaMobile = window.matchMedia('(max-width: 1000px)') //tamanho tela
    
    function modalResponsivo(e){
        if(e.matches){  // se for mobile
            elementModal.classList.add('elementModalResponsivo')
            btn.classList.add('btnModalResponsivo')
        } else{ 
            btn.classList.remove('btnModalResponsivo')
            elementModal.classList.remove('elementModalResponsivo')
        }
    }

    modalResponsivo(telaMobile)

    telaMobile.addEventListener('change', modalResponsivo)
}