const headerSection =document.querySelector('.header__section')
const arrowLeft = document.querySelector('.header__section_left')
const arrowRight = document.querySelector('.header__section_right')
let currentImage=0
let imagesArray = [
    "url('../../images/back1.png')",
    "url('../../images/back2.png')",
    "url('../../images/back3.png')",
]
const prev = document.querySelector('.fa-arrow-left')
const next = document.querySelector('.fa-arrow-right')



prev.addEventListener('click', ()=>{
    headerSection.style.backgroundImage= imagesArray[currentImage]
    arrowLeft.style.backgroundImage = imagesArray[currentImage - 1]
    currentImage--
    if(currentImage < 1){
        currentImage = imagesArray.length

    }
    
})

next.addEventListener('click', ()=>{
    headerSection.style.backgroundImage= imagesArray[currentImage]
    arrowRight.style.backgroundImage = imagesArray[currentImage + 1]
    currentImage++
    if(currentImage > imagesArray.length-1){
        currentImage =0
    } 
})
  