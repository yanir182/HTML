// const title=document.querySelector('.title'),
//     btn = document.querySelectorAll('.btn'),
//     text= document.querySelector('.text');

// let usn=prompt ('Name ?');


// console.log('Привет');

// function mmf(text){
//     title.textContent=`Привет, ${text}`;
// }

// function color(){
//     title.style.color='red'
// }

// const t1=setTimeout(color,9000)

// const t2=setTimeout( mmf, 5000, usn);

// console.log('Привет');

// btn[0].addEventListener('click',()=>{
//     clearTimeout(t2)
// });

// tI1=setInterval(()=>{
//     text.textContent += ' dpad adwopqkda dadkwp[dkwiaq';
// },10000000**111)

// btn[1].addEventListener('click',()=>{
//     clearInterval(tI1)
// })

//=====================================================================

const mytest = setInterval(()=>{
    console.log(new Date().getTime())
},3000)

document.addEventListener('click',()=>{
    clearTimeout(mytest)
})

