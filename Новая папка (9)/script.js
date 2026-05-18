function mc(x){
const activeSlide= document.querySelector('.videv'),
    slides = [...document.querySelectorAll('.pic')],
    currentSlide = slides.indexOf(activeSlide);
let newIndex = currentSlide+x
if(newIndex <0) newIndex=slides.length-1;
if(newIndex >= slides.length) newIndex=0;


slides[newIndex].classList.add('viden')
activeSlide.classList.remove('viden')
}

const btn=document.querySelectorAll('button');


btn[1],addEventListener('click', ()=>mc(1))

btn[0],addEventListener('click', ()=>mc(-1))
