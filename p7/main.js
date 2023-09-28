const btn = document.querySelectorAll('.ques-box')

btn.forEach(function (q) {
    q.addEventListener('click',function(){
        btn.forEach(function(element){
            element.classList.remove("show")
        })
        this.classList.toggle("show")
    })
})