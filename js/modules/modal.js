export default class Modal {
    constructor(botaoQuizz, modal, perguntas) {
        this.botaoQuizz = document.querySelector(botaoQuizz)
        this.modal = document.querySelector(modal)
        this.perguntas = document.querySelectorAll(perguntas)
        this.buttonNext = document.querySelector('#next')
        this.buttonPrev = document.querySelector('#prev')


        this.activeModal = this.activeModal.bind(this)
        this.outsideClick = this.outsideClick.bind(this)
        this.nextQuestion = this.nextQuestion.bind(this)
    }

    outsideClick(event) {
        if(event.target === this.modal) {
            this.modal.classList.remove('ativo')
        }
    }

    activeModal() {
        window.addEventListener('click', this.outsideClick)
        this.quizz = this.createRandomQuizz()
        console.log(this.quizz[0], this.quizz[1], this.quizz[2], this.quizz[3], this.quizz[4])
        this.modal.classList.add('ativo')
        // console.log(this.modal)
        this.modal.appendChild(this.quizz[0])
        this.indexAtual = 0 
        this.buttonNext.addEventListener('click', this.nextQuestion)
       
        // this.modal.innerHTML = this.quizz.primeiraPergunta
        
    }

    nextQuestion() {
        console.log(this.quizz[0])
        console.log(this.quizz[this.indexAtual])
        this.modal.replaceChild(this.quizz[this.indexAtual + 1], this.quizz[this.indexAtual])
        this.indexAtual += 1
        console.log(this.indexAtual)
    }

    addEventModal() {
        this.botaoQuizz.addEventListener('click', this.activeModal)
    }

    // verificationIfQuestionExistis(pergunta, index) {
    //     this.quizzSemVerificar.map((perguntaNoVerif, indexNoVerif) => {
    //         if(pergunta === perguntaNoVerif && index === indexNoVerif){
    //             return pergunta
    //         } else if(pergunta === perguntaNoVerif && index !== indexNoVerif) {
    //             pergunta = this.perguntas[this.randomZeroToTwenty]
    //             this.verificationIfQuestionExistis(pergunta, index)
    //         }
    //     }) 
     
    //     return pergunta
    // }

// for(let a = 0; a <= 5; a++) {
        //     console.log(pergunta === this.quizzSemVerificar[a] && index === a)
        //     console.log(this.quizzSemVerificar)
        //     if(pergunta === this.quizzSemVerificar[a] && index === a) {
        //         return pergunta
        //     }
        //     else if(pergunta === this.quizzSemVerificar[a] && index !== a) { 
        //         pergunta = this.perguntas[this.randomZeroToTwenty]
                // this.verificationIfQuestionExistis(pergunta, index)
        //     }

        // }

    verificationIfExists(pergunta) {
        if(this.quizzVazio.includes(pergunta)) {
            pergunta = this.perguntas[Math.floor(Math.random() * 20)]
            console.log(this.quizzVazio)
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

        this.quizzSemVerificar = [
            primeiraPergunta,
            segundaPergunta,
            terceiraPergunta,
            quartaPergunta,
            quintaPergunta
        ]

        console.log(this.quizzSemVerificar[0].innerHTML, this.quizzSemVerificar[1].innerHTML, this.quizzSemVerificar[2].innerHTML, this.quizzSemVerificar[3].innerHTML, this.quizzSemVerificar[4].innerHTML)

        this.quizzVazio = []

        return [
            this.verificationIfExists(primeiraPergunta),
            this.verificationIfExists(segundaPergunta),
            this.verificationIfExists(terceiraPergunta),
            this.verificationIfExists(quartaPergunta),
            this.verificationIfExists(quintaPergunta)
        ]

       

      
       
        // return this.quizzSemVerificar.map((pergunta, index) => {
        //      return this.verificationIfQuestionExistis(pergunta, index)
        // })
    }

    init() {
      if(this.botaoQuizz && this.modal && this.perguntas.length) {
        this.addEventModal()
        console.log(this.perguntas)
      }
      return this
    }
}