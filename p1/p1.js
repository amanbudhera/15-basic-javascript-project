const body = document.querySelector('body')
const b = document.querySelector('h1')
const btn = document.querySelector('.change')

const HEX = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener("click",function(){
    let col = "#"
    for (let i = 0; i < 6; i++) {
        col += HEX[Math.floor(Math.random().toFixed(1)*10)]
    }
    b.innerText = col
    body.style.backgroundColor = col
})
console.log(Math.random().toFixed(1)*10);
