
let id = document.getElementById.bind(document)

const showMenu = (toggleId, navId) =>{
    const toggle = id(toggleId),
          nav = id(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('main-menu-toggle', 'nav')