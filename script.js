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
  let navbar = document.getElementById('navbar')
  let navbarList = document.getElementById('navbar-list')
  navbar.classList.toggle('active', window.scrollY > 1)
  navbarList.classList.toggle('active', window.scrollY > 1)
})
}
fixNavbar()
