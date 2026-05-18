const btn = document.querySelectorAll('.btn'),
    slizaren = document.querySelector('.slizaren');
let step =0
btn[1].addEventListener('click',()=>{
    step+=500;
    if (step > 1500){
        step = 0
        slizaren.style.left = -step + 'px';
    }
    else{
         slizaren.style.left = -step + 'px';
    }
   

})
btn[0].addEventListener('click',()=>{
    step-=500;
    if (step < 0){
        step = 1500
        slizaren.style.left = -step + 'px';
    }
    else{
         slizaren.style.left = -step + 'px';
    }
})
