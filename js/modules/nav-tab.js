export default class NavTab {
    constructor(capitoes, icons){
        this.capitoes = document.querySelectorAll(capitoes)
        this.icons = document.querySelectorAll(icons)
    }

    toggleTabNav(index) {
        this.capitoes.forEach((capitao)=> {
            capitao.classList.remove('ativo')
        })
        if(this.capitoes[index].classList.contains('ativo')) {
            this.capitoes[index].classList.remove('ativo')
        } else
        this.capitoes[index].classList.add('ativo')
    }

    addEventNavTab() {
        this.icons.forEach((icone, index)=>{
            icone.addEventListener('click', ()=> {
                this.toggleTabNav(index)
            })
        })
    }

    init() {
        if(this.capitoes.length && this.icons.length) {
            this.addEventNavTab()
        }
    }
}

console.log('teste')
