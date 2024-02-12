import NavTab from './modules/nav-tab.js'
import SlideNav from './modules/slide.js'
import Modal from './modules/modal.js'

const navTab = new NavTab('.capitaes img', '.icones img')
navTab.init()

const modal = new Modal('.quizz button', '.modal-container')
modal.init()

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()