const btn = document.querySelector('.main-btn')
const closbtn = document.querySelector('.closs-btn')
const contaner = document.querySelector('.model-over')

btn.addEventListener("click",function(){
    contaner.classList.add("open-modal");
})
closbtn.addEventListener("click",function(){
    contaner.classList.remove("open-modal");
})
