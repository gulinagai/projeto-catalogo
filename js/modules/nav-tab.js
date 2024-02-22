export default class NavTab {
    constructor(capitaes, icons){
        this.capitaes = document.querySelectorAll(capitaes)
        this.icons = document.querySelectorAll(icons)
    }

    toggleTabNav(index) {
        this.capitaes.forEach((capitao)=> {
            capitao.classList.remove('ativo')
        })
        if(this.capitaes[index].classList.contains('ativo')) {
            this.capitaes[index].classList.remove('ativo')
        } else
        this.capitaes[index].classList.add('ativo')
    }

    addEventNavTab() {
        this.icons.forEach((icone, index)=>{
            icone.addEventListener('click', ()=> {
                this.toggleTabNav(index)
            })
        })
    }

    init() {
        if(this.capitaes.length && this.icons.length) {
            this.addEventNavTab()
            this.toggleTabNav(0)
        }
        return this
    }
}
