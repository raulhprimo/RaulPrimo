const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event){
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href)
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
linksInternos.forEach((link) =>{
  link.addEventListener('click', scrollToSection)
})

function fixNavbar(){
  window.addEventListener('scroll', function(){
  let header = document.querySelector('.header')
  header.classList.toggle('active', window.scrollY > 1)
})
}
fixNavbar()

const hamrburguer = document.querySelector('.hamburguer')
const nav = document.querySelector('.nav')

hamrburguer.addEventListener('click', () => {
  nav.classList.toggle('active')
})
