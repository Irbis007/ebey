document.addEventListener('DOMContentLoaded', () =>{
  const body = document.querySelector('body')
  const preloader = document.querySelector('.preloader')


  setTimeout(() => {
    preloader.classList.remove('preloader_active')
    body.style.overflow = "hidden scroll"
  }, 4000)

})