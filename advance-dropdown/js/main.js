const menuBtn = document.querySelector('.menu-btn')
const dropdown = document.querySelector('.dropdown')
const settings = document.querySelector('.settings')
const wrapper = document.querySelector('.wrapper')
const back = document.querySelector('.back')
const mainMenu = document.querySelector('.main-menu')
const secondaryMenu = document.querySelector('.secondary-menu')

let isOpen = false
let toggle = true

menuBtn.addEventListener('click', (e) => {
  if (!isOpen) {
    if (toggle) {
      dropdown.style.height = `${34 + mainMenu.offsetHeight}px`
    } else {
      dropdown.style.height = `${34 + secondaryMenu.offsetHeight}px`
    }
    dropdown.classList.add('active')
    isOpen = !isOpen
  } else {
    dropdown.classList.remove('active')
    isOpen = !isOpen
  }
})

settings.addEventListener('click', (e) => {
  if (toggle) {
    dropdown.style.height = `${34 + secondaryMenu.offsetHeight}px`
    wrapper.style.transform = 'translateX(-106%)'
    toggle = !toggle
  }
})

back.addEventListener('click', (e) => {
  if (!toggle) {
    dropdown.style.height = `${34 + mainMenu.offsetHeight}px`
    wrapper.style.transform = 'translateX(0)'
    toggle = !toggle
  }
})
