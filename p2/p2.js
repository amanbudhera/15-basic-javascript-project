let num = document.querySelector('.num')
// const dec = document.querySelector('.dec')
// const res = document.querySelector('.res')
// const inc = document.querySelector('.inc')
let numm = 0

const btn = document.querySelectorAll('.btn')



btn.forEach(bb => {
    // console.log(btn.className);
    bb.addEventListener("click",function(e){
        if (e.currentTarget.classList.contains('dec')) {
            numm--
        }else if(e.currentTarget.classList.contains('inc')) {
            numm++
        }
        else{
            numm = 0
        }
        num.innerHTML = numm
        if (numm>0) {
            num.style.color="green"
        } else if(numm<0){
            num.style.color="red"
        }
        else if(numm ===0){
            num.style.color="white"
        }
    })
});
