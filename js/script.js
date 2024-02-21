import ScrollToTop from './modules/scroll-logo.js'
import NavTab from './modules/nav-tab.js'
import SlideNav from './modules/slide.js'
import Modal from './modules/modal.js'
import AstaYunoMode from './modules/asta-yuno-mode.js'

const scrollToTop = new ScrollToTop('.inicio','#logo')
scrollToTop.init()

const navTab = new NavTab('.capitao', '.icones img')
navTab.init()

const astaYunoMode = new AstaYunoMode('.irmaos img', '.irmaos')
astaYunoMode.init()

const modal = new Modal('.quizz button', '.modal', '.pergunta', '.modal-container')
modal.init()

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()

