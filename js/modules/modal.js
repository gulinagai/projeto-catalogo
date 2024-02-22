export default class Modal {
    constructor(botaoQuizz, modal, perguntas, modalContainer) {
        this.botaoQuizz = document.querySelector(botaoQuizz)
        this.modal = document.querySelector(modal)
        this.perguntas = document.querySelectorAll(perguntas)
        this.modalContainer = document.querySelector(modalContainer)
        this.divAlternative = document.querySelectorAll('.pergunta div')
        this.gabarito = ['asta','yuno','5','rei','alvorecer-dourado','yami','anti-magia','charlotte','vento','licht','agua','lumiere','rouge','espacial','mereoleona','nero','augustus','salamandra','teleportador','sylph',]
        this.totalAcertos = []
        this.contador = 0


        this.activeModal = this.activeModal.bind(this)
        this.outsideClick = this.outsideClick.bind(this)
        this.nextQuestion = this.nextQuestion.bind(this)
        // this.prevQuestion = this.prevQuestion.bind(this)
        this.selectAlternative = this.selectAlternative.bind(this)
        this.clearContent = this.clearContent.bind(this)
    }

    outsideClick(event) {
        if(event.target === this.modalContainer) {
            this.modalContainer.classList.remove('ativo')
        }
        this.outside = true
    }

    activeModal() {
        window.addEventListener('click', this.outsideClick)
        this.modalContainer.classList.add('ativo')
        if(!this.modal.classList.contains('ativo-total')){
            if(!this.quizz) this.quizz = this.createRandomQuizz()
            this.perguntasArray = Array.from(this.perguntas)
            this.arrayIndex = []
            for(let c = 0; c < this.quizz.length; c++) {
                const array = this.perguntasArray.findIndex((pergunta)=> {
                    return this.quizz[c] === pergunta
                })
                this.arrayIndex.push(array)
            this.outside === true ? this.indexAtual === this.indexAtual : this.indexAtual = 0 
            }
            if(this.modal.childElementCount === 0) {
                this.divButtons = document.createElement('div')
                this.divButtons.classList.add('buttons')
                this.buttonNext = document.createElement('button')
                this.buttonNext.id = 'next'
                this.buttonNext.innerText = 'CONFIRMAR'
                this.buttonPrev = document.createElement('button')
                this.buttonPrev.id = 'prev'
                this.buttonPrev.innerText = '◀' 
                this.modal.appendChild(this.divButtons)
                this.divButtons.appendChild(this.buttonPrev)
                this.divButtons.appendChild(this.buttonNext)
            }
            this.quizz.forEach((pergunta, index)=>{
                this.enumerateQuestions(pergunta, index)
            })
            if(this.modal.childElementCount === 1 && this.divButtons.childElementCount === 2) this.modal.appendChild(this.quizz[this.indexAtual])
            this.buttonNext.addEventListener('click', this.nextQuestion)
            // this.buttonPrev.addEventListener('click', this.prevQuestion) 
        }
    }
    
    enumerateQuestions(pergunta, index) {
        const regexp = /X/gi
        pergunta.firstElementChild.innerText = pergunta.firstElementChild.innerText.replace(regexp, index + 1)
    }


    // prevQuestion() {
    //    this.indexAtual -= 1
    //    this.modal.replaceChild(this.quizz[this.indexAtual], this.quizz[this.indexAtual + 1])
       
    //    if(this.indexAtual >= 0 && this.indexAtual < this.quizz.length - 1) {
    //     this.buttonNext.style.display = 'inline'
    //    } 
    //    if(this.indexAtual === 0) this.buttonPrev.style.display = 'none'
    // }

    nextQuestion() {
        if(this.indexAtual + 1 === this.quizz.length) {
            this.verificationResponse(this.indexAtual)
            this.modal.innerHTML = ''
            this.buttonNext.style.display = 'none'
            const imagemTotal = document.createElement('img')
            for(let i = 0; i < this.totalAcertos.length; i++) {
              if(this.totalAcertos[i] === true) {
                     this.contador += 1
              }
            }
            this.createElementsTotal()
        } else {
            this.verificationResponse(this.indexAtual)
            this.indexAtual += 1
            this.modal.replaceChild(this.quizz[this.indexAtual], this.quizz[this.indexAtual - 1])
            if(this.indexAtual === this.quizz.length) {
                this.modal.innerHTML = ''
                this.buttonNext.style.display = 'none'
            }
            // if(this.indexAtual > 0) {
            //     this.buttonPrev.style.display = 'inline'
            // }
        }
    }

    createElementsTotal() {
        
        this.imagemTotal = document.createElement('img')
        this.mensagemTotal = document.createElement('p')
        this.acertosTotal = document.createElement('p')
        this.botaoReiniciar = document.createElement('button')
        this.modal.classList.add('ativo-total')
        this.modal.appendChild(this.imagemTotal)
        this.modal.appendChild(this.mensagemTotal)
        this.modal.appendChild(this.acertosTotal)
        this.modal.appendChild(this.botaoReiniciar)
        this.botaoReiniciar.innerText = 'Reiniciar Quizz'
        this.botaoReiniciar.addEventListener('click', this.clearContent)
        this.acertosTotal.innerText = `Total de Acertos: ${this.contador}/5`
        this.mensagemTotal.classList.add('mensagem-total')
        this.acertosTotal.classList.add('acertos-total')
        if(this.contador >= 0 && this.contador <= 2) {
            this.imagemTotal.setAttribute('src', '../../imagens/quizz/asta-1.png')
            this.imagemTotal.classList.add('imagem-total')
            if(this.contador === 0) {
                this.mensagemTotal.innerText = 'Você é péssimo! vai assistir Black Clover agora!' 
            } else if(this.contador === 1) {
                this.mensagemTotal.innerText = 'Você é muito ruim! Assista o anime do zero!'
            } else if(this.contador === 2) {
                this.mensagemTotal.innerText = 'Você é ruim! está chutando?' 
            }
        } else if(this.contador === 3) {
            this.imagemTotal.setAttribute('src', '../../imagens/quizz/asta-tres.png')
            this.mensagemTotal.innerText = 'Você foi ok! Mas precisa melhorar isso aí!'    
        } else if(this.contador > 3 && this.contador <= 5) {
            this.imagemTotal.setAttribute('src', '../../imagens/quizz/asta-5.png')
            if(this.contador === 4) {
                this.mensagemTotal.innerText = 'Você é bom! e sabe muito sobre Black Clover!'
            } else if(this.contador === 5) {
                this.mensagemTotal.innerText = 'Meus parabéns! Você é um otaku!'
            }
        }
            
    }

    clearContent() {
        this.modal.innerHTML = ''
        this.modal.classList.remove('ativo-total')
        this.contador = 0
        this.imagemTotal.remove()
        this.mensagemTotal.remove()
        this.acertosTotal.remove()
        this.botaoReiniciar.remove()
        this.totalAcertos = []
        this.outside = false
        this.quizz.forEach((pergunta, index) =>{
            pergunta.firstElementChild.innerText = pergunta.firstElementChild.innerText.replace(/(Pergunta )\d/, '$1X')
        })
        this.quizz.forEach((pergunta)=>{
            const divPergunta = pergunta.querySelectorAll('div')
            divPergunta.forEach((alternativa)=>{
                alternativa.firstElementChild.checked = false
            })
        })
        this.quizz = false

        this.activeModal()
    }

    verificationIfExists(pergunta) {
        if(this.quizzVazio.includes(pergunta)) {
            pergunta = this.perguntas[Math.floor(Math.random() * 20)]
            return this.verificationIfExists(pergunta)
        } else {
            this.quizzVazio.push(pergunta)
            return pergunta
        }
    }

    createRandomQuizz() {

        const primeiraPergunta = this.perguntas[Math.floor(Math.random() * 20)]
        const segundaPergunta = this.perguntas[Math.floor(Math.random() * 20)]
        const terceiraPergunta = this.perguntas[Math.floor(Math.random() * 20)]
        const quartaPergunta = this.perguntas[Math.floor(Math.random() * 20)]
        const quintaPergunta = this.perguntas[Math.floor(Math.random() * 20)]

        this.quizzVazio = []

        return [
            this.verificationIfExists(primeiraPergunta),
            this.verificationIfExists(segundaPergunta),
            this.verificationIfExists(terceiraPergunta),
            this.verificationIfExists(quartaPergunta),
            this.verificationIfExists(quintaPergunta)
        ]
    }

    verificationResponse(index) {
        const alternativas = document.querySelectorAll('.modal .pergunta div')
        const arrayAlternativas = Array.from(alternativas)
        const alternativaMarcada = arrayAlternativas.find((alternativa)=>{
            return alternativa.firstElementChild.checked === true 
        })
        if(alternativaMarcada.firstElementChild.value === this.gabarito[this.arrayIndex[index]]) {
            this.totalAcertos.push(true)
            this.imgAcerto = document.createElement('img')
            this.mensagemAcerto = document.createElement('p')
            this.imgAcerto.setAttribute('src', '../../imagens/quizz/asta-acerto.png')     
            this.mensagemAcerto.innerText = 'Você acertou!!!'   
            document.body.appendChild(this.imgAcerto)
            document.body.appendChild(this.mensagemAcerto)
            this.imgAcerto.classList.add('imagem-acerto', 'ativo')
            this.mensagemAcerto.classList.add('mensagem-acerto', 'ativo')
            setTimeout(()=>{
                this.imgAcerto.classList.remove('imagem-acerto', 'ativo')
                this.mensagemAcerto.classList.remove('mensagem-acerto', 'ativo')
            }, 1500)
        } else {
            this.totalAcertos.push(false)
            this.imgErro = document.createElement('img')
            this.mensagemErro = document.createElement('p')
            this.imgErro.setAttribute('src', '../../imagens/quizz/asta-erro.png')     
            this.mensagemErro.innerText = 'Você errou!!!'   
            document.body.appendChild(this.imgErro)
            document.body.appendChild(this.mensagemErro)
            this.imgErro.classList.add('imagem-erro', 'ativo')
            this.mensagemErro.classList.add('mensagem-erro', 'ativo')
            setTimeout(()=>{
                this.imgErro.classList.remove('imagem-erro', 'ativo')
                this.mensagemErro.classList.remove('mensagem-erro', 'ativo')
            }, 1500)
        }
        setTimeout(()=>{
            if(this.imgAcerto && this.mensagemAcerto){
                this.imgAcerto.remove()
                this.mensagemAcerto.remove()
                this.imgAcerto = false
                this.mensagemAcerto = false
                
            } else if(this.imgErro && this.mensagemErro){
                this.imgErro.remove()
                this.mensagemErro.remove()
                this.imgErro = false
                this.mensagemErro = false
                
            }    
        }, 1500)
    }

    selectAlternative(alternativa) {
        alternativa.firstElementChild.checked = true
    }

    addEventModal() {
        this.botaoQuizz.addEventListener('click', this.activeModal)
        this.divAlternative.forEach((alternativa)=>{
            alternativa.addEventListener('click', ()=> {
                this.selectAlternative(alternativa)
            })
        })
    }

    init() {
      if(this.botaoQuizz && this.modal && this.perguntas.length) {
        this.addEventModal()
      }
      return this
    }
}