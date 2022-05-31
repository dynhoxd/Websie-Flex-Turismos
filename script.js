let btnMobile = document.querySelector("#btn-mobile")
let btnMobile1 = document.querySelector("#btn-mobile1")

btnMobile.addEventListener("click", toggleMenu)
function toggleMenu(){
    const nav = document.querySelector("#nav")
    nav.classList.toggle("ative")
}
btnMobile1.addEventListener("click", toggleMenu)
function toggleMenu(){
    const nav = document.querySelector("#nav")
    nav.classList.toggle("ative")
}
function hideMenu(){
    const nav = document.querySelector("#nav")
    nav.classList.remove("ative")
}
