import debounce from './debounce.js'

export default class ScrollToTop {
    constructor(elementoTopo, logo){
        this.elementoTopo = document.querySelector(elementoTopo)
        this.logo = document.querySelector(logo)
        this.options = { behavior: 'smooth', block: 'start' }
        this.backToTop = this.backToTop.bind(this)
        this.toggleLogo = debounce(this.toggleLogo.bind(this), 200)
    }



    toggleLogo() {
                if (window.scrollY >= 0 && window.scrollY < 100) {
                    this.logo.style.transition = 'height .2s'
                    this.logo.style.height = '120px'
                } else if(window.scrollY >= 100 && window.scrollY < 200) {
                    this.logo.style.height = '100px'
                } else if(window.scrollY >= 200) {
                    this.logo.style.height = '80px'
                }
         
    }

    backToTop(event) {
        event.preventDefault()
        this.elementoTopo.scrollIntoView(this.options)
        setTimeout(()=>{
        this.logo.style.transition = 'height .2s'
        this.logo.style.height = '120px'
        }, 500)
    }

    addEventLogo() {
        this.logo.addEventListener('click', this.backToTop)
        window.addEventListener('wheel', this.toggleLogo)
    }

    init() {
        if(this.logo) {
            this.addEventLogo()
        }
        return this
    }
}