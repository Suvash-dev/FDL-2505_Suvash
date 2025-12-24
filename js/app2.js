let inputDate = document.querySelector('input');
let age = document.querySelector("#age");

inputDate.addEventListener('change',(e)=>{
      age.innerText = new Date().getFullYear() -
     new Date(e.target.value).getFullYear();
     console.log(new Date())
})