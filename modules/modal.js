import { responsividadeModal } from './responsividade.js'

export default function modal(){
  const modalDiv = criarDiv() //cria modal principal
  const elementModal = criarDiv() //cria modal com texto
  const conteudoModal = textElementModal() //busca o conteudo do modal
  const btn = document.createElement('button') //criando botao

  modalDiv.classList.add('modal') //adicionando as classes das div
  elementModal.classList.add('elementModal')
  btn.classList.add('btnModal') //classe do botao

  elementModal.appendChild(conteudoModal.titulo) //add conteudos
  elementModal.appendChild(conteudoModal.texto)

  document.body.appendChild(modalDiv) //posicionado o modal
  modalDiv.appendChild(elementModal)
  elementModal.appendChild(btn) //posicionando botao

  btn.addEventListener('click', fecharModal)
  modalDiv.addEventListener('click', fecharModal)

  function fecharModal(event){//funcao para fechar modal
    event.preventDefault()  
    if(event.target === this){
      modalDiv.style.display = 'none'
      elementModal.style.display = 'none'
    }
  }

  responsividadeModal(elementModal, btn, modalDiv)
}

function criarDiv(){ //funcao que cria uma div
  return document.createElement('div')
}

function textElementModal(){ // funcao para o conteudo do modal
  let h1 = document.createElement('h1')
  let p = document.createElement('p')

  h1.classList.add('tituloModal')
  p.classList.add('textoModal')

  h1.textContent = 'Deixe tudo do seu jeito!'
  p.textContent = 'Personalize sua experiência com painéis animados e adicione as imagens que mais gosta.'

  const conteudo = {
    titulo: h1,
    texto: p
  }

  return conteudo
}
