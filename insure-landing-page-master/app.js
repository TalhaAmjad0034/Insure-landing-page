
const mainMenu = document.querySelector(".mainMenu")
const openMenu = document.querySelector(".openMenu")
const closeMenu = document.querySelector(".closeMenu")

openMenu.addEventListener('click', show);


function show(){
    mainMenu.style.display = 'flex'
    closeMenu.style.display = 'block'
}

closeMenu.addEventListener('click', close);

function close(){
    mainMenu.style.display = 'none'
    closeMenu.style.display = 'none'
}
