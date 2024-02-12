export default class Modal {
    constructor(botaoQuizz, modal) {
        this.botaoQuizz = document.querySelector(botaoQuizz)
        this.modal = document.querySelector(modal)
        this.activeModal = this.activeModal.bind(this)
        this.outsideClick = this.outsideClick.bind(this)
    }

    outsideClick(event) {
        console.log(event.target, this.modal)
        if(event.target === this.modal) {
            this.modal.classList.remove('ativo')
        }
    }

    activeModal() {
        window.addEventListener('click', this.outsideClick)
        this.modal.classList.add('ativo')
        
    }

    addEventModal() {
        this.botaoQuizz.addEventListener('click', this.activeModal)
    }

    init() {
      if(this.botaoQuizz && this.modal) {
        this.addEventModal()
      }
      return this
    }
}