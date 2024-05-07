
const mainContainer = document.querySelector('body')


function openModal(openBtn, content, closeBtn, classActive) {
  openBtn.addEventListener('click', () =>{
    content.classList.add(classActive)
    mainContainer.style.overflow = 'hidden'
  })
  
  closeBtn.addEventListener('click', () =>{
    content.classList.remove(classActive)
    mainContainer.style.overflow = 'hidden auto'
  })
}



const menuOpen = document.querySelector('.menu__hamburger')
const menu = document.querySelector('.menu')
const menuClose = document.querySelector('.menu__close')

openModal(menuOpen, menu, menuClose, 'menu_active')


const garantyOpen = document.querySelector('.auth-details__see-more')
const garanty = document.querySelector('.garanty')
const garantyClose = document.querySelector('.garanty__close')

openModal(garantyOpen, garanty, garantyClose, 'garanty_active')


const productInfoOpen = document.querySelector('.show__info')
const productInfo = document.querySelector('.product-info')
const productInfoClose = document.querySelector('.product-info__close')

openModal(productInfoOpen, productInfo, productInfoClose, 'product-info_active')


const searchOpen = document.querySelector('.search__open')
const search = document.querySelector('.search')
const searchClose = document.querySelector('.search__close')

openModal(searchOpen, search, searchClose, 'search_active')
