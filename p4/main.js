const btn = document.querySelector('button')
const links = document.querySelector('.con')

btn.addEventListener("click",function(){
    links.classList.toggle('show-nav');//add show-nav inn css to display flex or block
})