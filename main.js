let navigation = document.getElementById('navigation')
let backToTopButton = document.getElementById('backToTopButton')
window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2 /*onde inicia o home*/
  const sectionTop = section.offsetTop /*altura inteira do home*/
  const sectionHeight = section.offsetHeight
  // o topop da secao chegou ou ultrapasou a linha do alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //onde a secao termina
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    // verifica se eu estou na secão.
    menuElement.classList.add('active')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img, 
#home .stat h3,
#home .stat p,
#services, 
#services header,
#services .card,
#about,
#about h4,
#about h2,
#about .content,
#contacts,
#contacts header,
#contacts .content,
footer,
footer .logo,
footer .content
`)
