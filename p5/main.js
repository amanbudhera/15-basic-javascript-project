const toglbtn = document.querySelector('.nav-togl')
const clossbtn = document.querySelector('.closs-btn')
const nav = document.querySelector('.nav-bar')


toglbtn.addEventListener("click",function () {
    nav.classList.toggle('show-list')
})
clossbtn.addEventListener("click",function () {
    nav.classList.toggle('show-list')
})
