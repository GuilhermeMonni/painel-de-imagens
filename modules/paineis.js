export default function painel(){
    const paineis = document.querySelectorAll('[data-painel]') //paineis da pag

    paineis.forEach((item) => {
        //event quando o cursor passar
        item.addEventListener('mouseover', mouseEvent)
        item.addEventListener('mouseout', mouseEvent)

        //usuario add imagem
        const inputFile = item.querySelector('[data-input]') //input file do index

        inputFile.addEventListener('change', (e) => {
            const file = e.target.files[0] //pega o arquivo selecionado
            if(file){
                const reader = new FileReader() //lê  arquivo 
                reader.onload = (e) => {
                    //cria imagem e exibe dentro do painel
                    const img = document.createElement('img') //cria img
                    img.src = e.target.result
                    img.style.width = '1920px'
                    img.style.height = '1080px'
                    img.classList.add('imagem-adicionada')
                    item.style.backgroundColor = 'transparent'
                    item.style.border = 'transparent'
                    item.innerHTML = '' //limpa o conteudo anterior d painel
                    item.appendChild(img)
                }
                reader.readAsDataURL(file) //lê o arquivo como uma url
            }
        })

    })

    function mouseEvent(e){ //funcao para o mouse
        if(!this.imgAdd){  //verifica e add a img junto ao elemento
            this.imgAdd = document.createElement('img')
            this.imgAdd.src = '../imgs/btn-adicionar.png'
            this.imgAdd.classList.add('img-adicionar')
            this.appendChild(this.imgAdd)
        }
    
        if(e.type == 'mouseover'){  //add imagem quando o mouse entra
            this.imgAdd.style.display = 'block'
        }else if(e.type == 'mouseout'){ //tira img quando mouse sai    
            if(!this.contains(e.relatedTarget)){
                this.imgAdd.style.display = 'none'
            }
        }
    }
}




