let images = document.querySelectorAll('.gallery img')
let popup = document.querySelector('.popup')
let popupImage = document.querySelector('.popup img')
let cancelBtn = document.querySelector('.popup .cancelBtn')
let rightArrow = document.querySelector('.rightArrow')
let leftArrow = document.querySelector('.leftArrow')

let selectedImage = 0


function openPopup(event,index){
     popupImage.src = event.target.src
      popup.classList.add('show')
      selectedImg = index
      console.log(selectedImg)
}

function closePopup(event){
     if(event.target.classList.contains('popup') || event.target.classList.contains('closeIcon') || event.target.classList.contains('cancelBtn')) {

           popup.classList.remove('show')

     }
    

}

 images.forEach((img,index) => {
     img.addEventListener('click', (event)=>openPopup(event,index))
 })

 cancelBtn.addEventListener('click', closePopup)
 popup.addEventListener('click', closePopup)


 function nextImage(){
     selectedImage++
     if(selectedImage >= images.length){
          selectedImage = 0
     }
     popupImage.src = images[selectedImage].src
 }

 function prevImage(){
     selectedImage--
     if(selectedImage < 0){
          selectedImage = images.length - 1
     }
     popupImage.src = images[selectedImage].src

 }



 rightArrow.addEventListener('click', nextImage)
 leftArrow.addEventListener('click', prevImage)