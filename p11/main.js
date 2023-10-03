const btn = document.querySelectorAll(".btn")
const data = document.querySelectorAll(".content")

btn.forEach(e => {
    e.addEventListener("click",function (ee) {
      const id = ee.target.id
      btn.forEach(b=>b.classList.remove("active"))
      e.classList.add("active")
      
      data.forEach((dat)=>dat.classList.remove("activ"))
      const para = document.querySelector(`.${id}`)
      console.log(para);
      para.classList.add("activ")

    });
});