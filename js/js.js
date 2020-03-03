const toggle = document.getElementById('toggle')
const container = document.getElementById('gridContainer')
const info = document.getElementById('info')
const cite = document.getElementById('cite')
const subtitle = document.getElementById('sub')
const buscar = document.getElementById('buscar')

const icon = Array.from(document.querySelectorAll('.menu-lateral .sub-avatar'))

toggle.addEventListener('click', e => {
    container.classList.toggle('active-menu')
    info.classList.toggle('ocultar-info')
    subtitle.classList.toggle('ocultar-info')
    cite.classList.toggle('ocultar-info')
    for(let el of icon) {
        el.classList.toggle('margin')
    }
    // icon.classList.toggle('margin')
})

buscar.addEventListener('click', e=> {
    alert('Maquetacion y diseño realizado por NELSON URBANEJA')
})

const comprobarAncho = e => {
    if(window.innerWidth >= 780) {
        container.classList.remove('active-menu')
        info.classList.remove('ocultar-info')
        subtitle.classList.remove('ocultar-info')
        cite.classList.remove('ocultar-info')
        for(let el of icon) {
            el.classList.remove('margin')
        }
    }else {
        container.classList.add('active-menu')
        info.classList.add('ocultar-info')
        subtitle.classList.add('ocultar-info')
        cite.classList.add('ocultar-info')
        for(let el of icon) {
            el.classList.add('margin')
        }
    }
}

comprobarAncho()

window.addEventListener('resize', e => {
    comprobarAncho()
})
