const allRoutes = document.querySelectorAll('.nav-btn')
const currentPathName = window.location.pathname.replace('/', '')

allRoutes.forEach(function (route) {
  // Add active class when enters nav route page 
  if (route.id === currentPathName) {
    route.classList.add('nav-btn--active')
  }
  route.onclick = () => {
    window.location = `/${route.id}`
  }
})
