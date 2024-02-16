export default class AstaYunoMode {
    constructor(irmaos, irmaosDiv) {
        this.irmaos = document.querySelectorAll(irmaos)
        this.irmaosDiv = document.querySelector(irmaosDiv)
        
        this.backgroundChange = this.backgroundChange.bind(this)
        this.addMouseOverEffect = this.addMouseOverEffect.bind(this)
    }

    backgroundChange(event) {
        document.body.classList.remove('ativo-asta-mode', 'ativo-yuno-mode')
        if (event.target === this.irmaos[0]) {
            document.body.classList.add('ativo-asta-mode')
            // document.body.style.backgroundColor = '#111111'
           
        } else if (event.target === this.irmaos[1]) {
            document.body.classList.add('ativo-yuno-mode')
            // document.body.style.backgroundColor = '#aee4a0'

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
        }
        // console.log(this.irmaosDiv)
        return this
    }
}