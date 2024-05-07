
const mainContainer = document.querySelector('body')



const menuOpen = document.querySelector('.menu__hamburger')
const menu = document.querySelector('.menu')
const menuClose = document.querySelector('.menu__close')


menuOpen.addEventListener('click', () =>{
  menu.classList.add('menu_active')
  mainContainer.style.overflow = 'hidden'
})

menuClose.addEventListener('click', () =>{
  menu.classList.remove('menu_active')
  mainContainer.style.overflow = 'hidden auto'
})


const garantyOpen = document.querySelector('.auth-details__see-more')
const garanty = document.querySelector('.garanty')
const garantyClose = document.querySelector('.garanty__close')


garantyOpen.addEventListener('click', () =>{
  garanty.classList.add('garanty_active')
  mainContainer.style.overflow = 'hidden'
})

garantyClose.addEventListener('click', () =>{
  garanty.classList.remove('garanty_active')
  mainContainer.style.overflow = 'hidden auto'
})


const productInfoOpen = document.querySelector('.show__info')
const productInfo = document.querySelector('.product-info')
const productInfoClose = document.querySelector('.product-info__close')


productInfoOpen.addEventListener('click', () =>{
  productInfo.classList.add('product-info_active')
  mainContainer.style.overflow = 'hidden'
})

productInfoClose.addEventListener('click', () =>{
  productInfo.classList.remove('product-info_active')
  mainContainer.style.overflow = 'hidden auto'
})