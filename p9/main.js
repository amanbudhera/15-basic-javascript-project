const vdo = document.querySelector('.vdo-contaner')
const btn = document.querySelector('.btn')

btn.addEventListener("click",function(){
    // console.log('dd');


    
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        vdo.pause()
    } else {
        btn.classList.remove('slide')
        vdo.play()
    }
})