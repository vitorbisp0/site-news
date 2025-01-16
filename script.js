const menuNav = document.querySelector('#menu-nav')
const menuBurguer = document.querySelector('#menu-burguer')
const menu_search = document.querySelector('#menu_search')
const btnLista = document.querySelectorAll('.btn-lista')
const menuTelaMaior = document.querySelector('#menuMaior')

menuBurguer.addEventListener('click',evt => {{
    menuNav.classList.toggle('d-none')
    menuNav.style.height = '100vh' 
    const allOp = document.querySelectorAll('.sub-lista')
    allOp.forEach(menu => {
        menu.style.display = 'none'
    })
}})

function toggleMenu(menuId){
    // Esconde todas as subopções
    const allOp = document.querySelectorAll('.sub-lista')
    allOp.forEach(menu => {
        if(menu.id !== menuId){
            menu.style.display = 'none'
        }
    })
    
    // Alterna a visibilidade do menu clicado
    const menu = document.getElementById(menuId)
    menu.style.display = menu.style.display === 'block' ?'none' : 'block'
}

const secundario_video = document.querySelector('#secundario-video')
const seta_esquerda = document.querySelector('#scrollLeft')
const seta_direita = document.querySelector('#scrollRight')

window.addEventListener('resize',(evt)=>{
    if(evt.target.innerWidth >= 750){
        const caixa_logo = document.querySelector('#caixa-logo')
        
    }
})

seta_esquerda.addEventListener('click', () => {
    if (secundario_video.scrollLeft === 0) {
        secundario_video.scrollBy({ left: secundario_video.scrollWidth, behavior: 'smooth' });
    } else {
        secundario_video.scrollBy({ left: -300, behavior: 'smooth' });
    }
});

seta_direita.addEventListener('click', () => {
    if (secundario_video.scrollLeft + secundario_video.clientWidth >= secundario_video.scrollWidth) {
        secundario_video.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        secundario_video.scrollBy({ left: 300, behavior: 'smooth' });
    }
});

secundario_video.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        if (secundario_video.scrollLeft === 0) {
            secundario_video.scrollBy({ left: secundario_video.scrollWidth, behavior: 'smooth' });
        } else {
            secundario_video.scrollBy({ left: -300, behavior: 'smooth' });
        }
    } else if (event.key === 'ArrowRight') {
        if (secundario_video.scrollLeft + secundario_video.clientWidth >= secundario_video.scrollWidth) {
            secundario_video.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            secundario_video.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }
});