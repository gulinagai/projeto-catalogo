import debounce from './debounce.js'

export default class ScrollToTop {
    constructor(elementoTopo, logo){
        this.elementoTopo = document.querySelector(elementoTopo)
        this.logo = document.querySelector(logo)
        
        this.heightImg = window.getComputedStyle(this.logo).height
        
    
    
        this.options = { block: 'start' }
        this.backToTop = this.backToTop.bind(this)
        this.toggleLogo = debounce(this.toggleLogo.bind(this), 200)
        
    
    }



    toggleLogo() {
            this.logo.style.transition = 'height .2s'
            if (window.scrollY >= 0 && window.scrollY < 100) {
                this.logo.style.height = this.heightImg
            } else if(window.scrollY >= 100 && window.scrollY < 200) {
                this.logo.style.height = `calc(${this.heightImg} - 20px)`
            } else if(window.scrollY >= 200) {
                this.logo.style.height = `calc(${this.heightImg} - 40px)`
            }
    }

    backToTop(event) {
        event.preventDefault()
        if(event.target === this.logo){
            document.body.scrollIntoView(this.options)
            this.logo.style.transition = 'height .2s'
            this.logo.style.height = this.heightImg
        }
    }

    addEventLogo() {
        this.logo.addEventListener('click', this.backToTop)
        window.addEventListener('wheel', this.toggleLogo)
    }

    init() {
        if(this.logo) {
            this.addEventLogo()
        }
        console.log(this.heightImg)
        return this
    }
}