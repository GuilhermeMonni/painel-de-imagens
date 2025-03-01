export function responsividadeModal(elementModal, btn, modalDiv){ //responsividade modal
    const telaMobileModal = window.matchMedia('(max-width: 1000px)') //tamanho tela
    
    function modalResponsivo(e){
        if(e.matches){  // se for mobile
            elementModal.classList.add('elementModalResponsivo')
            btn.classList.add('btnModalResponsivo')
            modalDiv.style.height = '200vh'
        } else{ 
            btn.classList.remove('btnModalResponsivo')
            elementModal.classList.remove('elementModalResponsivo')
        }
    }

    modalResponsivo(telaMobileModal)

    telaMobileModal.addEventListener('change', modalResponsivo)
}

export function responsividadePaineis(){ //responsividade paineis da pag
    const telaMobilePaineis = window.matchMedia('(max-width: 1000px)') //tamanho tela
    const painel = document.querySelector('.paineis') //div dos paineis
    const body = document.body
    
    function paineisResponsivos(e){
        if(e.matches){  // se for mobile
            painel.style.gridTemplateColumns = '80%'
            body.style.backgroundRepeat = 'repeat'
            body.style.margin = '0 auto 100%'
        } 
    }

    paineisResponsivos(telaMobilePaineis)

    telaMobilePaineis.addEventListener('change', paineisResponsivos)
}