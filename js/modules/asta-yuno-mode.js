export default class AstaYunoMode {
    constructor(irmaos, irmaosDiv) {
        this.irmaos = document.querySelectorAll(irmaos)
        this.irmaosDiv = document.querySelector(irmaosDiv)
        
        this.backgroundChange = this.backgroundChange.bind(this)
        this.addMouseOverEffect = this.addMouseOverEffect.bind(this)

        this.imagemAstaCriada = false
        this.imagemYunoCriada = true
        this.firstCreate = true
        this.firstTimeYuno = false
    }

    backgroundChange(event) {
        document.body.classList.remove('ativo-asta-mode', 'ativo-yuno-mode')
        if (event.target === this.irmaos[0]) {
            document.body.classList.add('ativo-asta-mode')
            this.createImagesMode()
        } else if (event.target === this.irmaos[1]) {
            document.body.classList.add('ativo-yuno-mode')
            this.createImagesMode()
        }
    }

    createImagesMode() {
        if(document.body.classList.contains('ativo-asta-mode') || this.firstCreate) {
            if(this.imagemYunoCriada && this.firstTimeYuno) {
                [this.fundoImagemYuno1, this.fundoImagemYuno2, this.fundoImagemYuno3, this.fundoImagemYuno4].forEach((imgFundoYuno)=>{
                    imgFundoYuno.remove()
                })
            }
            this.imagemYunoCriada = false
            if(!this.imagemAstaCriada){
            this.fundoImagemAsta1 = document.createElement('img')
            this.fundoImagemAsta2 = document.createElement('img')
            this.fundoImagemAsta3 = document.createElement('img')
            this.fundoImagemAsta4 = document.createElement('img')

            const listaAsta = [this.fundoImagemAsta1, this.fundoImagemAsta2, this.fundoImagemAsta3, this.fundoImagemAsta4]

            listaAsta.forEach((imgFundoAsta, index)=>{
                imgFundoAsta.setAttribute('src', `./imagens/asta-side/asta-side-${index + 1}.png`)
            })

           listaAsta.forEach((imgFundoAsta)=>{
            document.body.appendChild(imgFundoAsta)
           })

            this.fundoImagemAsta1.classList.add('img-left-top')
            this.fundoImagemAsta2.classList.add('img-left-bottom')
            this.fundoImagemAsta3.classList.add('img-right-top')
            this.fundoImagemAsta4.classList.add('img-right-bottom')
            this.imagemAstaCriada = true

            this.firstCreate = false

            this.firstTimeYuno = true
    
            }
        } else if(document.body.classList.contains('ativo-yuno-mode')) {
            if(this.imagemAstaCriada) {
                [this.fundoImagemAsta1, this.fundoImagemAsta2, this.fundoImagemAsta3, this.fundoImagemAsta4].forEach((imgFundoAsta)=>{
                    imgFundoAsta.remove()
                })
                this.imagemAstaCriada = false
            }
            if(!this.imagemYunoCriada) {
                this.fundoImagemYuno1 = document.createElement('img')
                this.fundoImagemYuno2 = document.createElement('img')
                this.fundoImagemYuno3 = document.createElement('img')
                this.fundoImagemYuno4 = document.createElement('img')
                
                const listaYuno = [this.fundoImagemYuno1, this.fundoImagemYuno2, this.fundoImagemYuno3, this.fundoImagemYuno4]
               
                listaYuno.forEach((imgFundoYuno, index)=>{
                    imgFundoYuno.setAttribute('src', `./imagens/asta-side/yuno-side-${index + 1}.png`)
                })

                listaYuno.forEach((imgFundoYuno)=>{
                    document.body.appendChild(imgFundoYuno)
                })


                this.fundoImagemYuno1.classList.add('img-left-top')
                this.fundoImagemYuno2.classList.add('img-left-bottom')
                this.fundoImagemYuno3.classList.add('img-right-top')
                this.fundoImagemYuno4.classList.add('img-right-bottom')
                this.imagemYunoCriada = true
                
            }
          
        }
    }

    addMouseOverEffect(event, index) {
        const target = event.target
        if(event.target === this.irmaos[0]) {
            this.irmaos[index].classList.add('ativo')
            this.irmaosDiv.classList.add('ativoAsta')
        } else if (event.target === this.irmaos[1]) {
            this.irmaos[index].classList.add('ativo')
            this.irmaosDiv.classList.add('ativoYuno')
        }
            this.irmaos[index].addEventListener('mouseout', ()=> {
                this.removeMouseOverEffect(target, index)
            })
    }

    removeMouseOverEffect(target, index) {
        this.irmaos[index].classList.remove('ativo')
        if(target === this.irmaos[0]) {
            this.irmaosDiv.classList.remove('ativoAsta')
        } else if (target === this.irmaos[1]) {
            this.irmaosDiv.classList.remove('ativoYuno')
        }
    }

    addEventsIrmaos() {
        this.irmaos.forEach((irmao)=>{
            irmao.addEventListener('click', this.backgroundChange)
        })
        this.irmaos.forEach((irmao, index)=> {
            irmao.addEventListener('mouseover', ()=>{
                this.addMouseOverEffect(event, index)
            })
        })
    }

    init() {
        if(this.irmaos.length){
            this.addEventsIrmaos()
            this.createImagesMode()
        }
        return this
    }
}