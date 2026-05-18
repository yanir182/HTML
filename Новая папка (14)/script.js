const block = document.querySelector('.block');

// // console.log(block.offsetParent)
// // console.log(block.offsetLeft);
// // console.log(block.offsetTop);

// // console.log(block.offsetWidth);
// // console.log(block.offsetHeight);

// // console.log(block.clientTop);
// // console.log(block.clientLeft);
// // console.log(block.clientWidth);
// // console.log(block.clientHeight);

// console.log(block.scrollHeight);
// console.log(block.scrollWidth);
// block.scrollLeft = 400;
// block.scrollTop = 300;

// console.log(window.scrollHeight)

console.log(window.scrollY)
console.log(window.scrollX)
const btn = document.querySelectorAll('.btn'),
box = document.querySelector('.box');

// // btn[0].addEventListener('click',()=>{
// //     window.scrollBy(0,2000)
// // })
// btn[0].addEventListener('click',()=>{
//     window.scrollTo(0,1000)
// })
// btn[0].addEventListener('click',()=>{
//     box.scrollIntoView(Top);
// })

// btn[0].addEventListener('click',()=>{
//     box.scrollIntoView({
//         block: "center" ,
//         inline: "nearest",
//         behavior: "smooth"
//     })
// })
const pago = document.querySelector('body')
// btn[1].addEventListener('click',()=>{
//     pago.style.overflow='hidden';
// })
// btn[0].addEventListener('click',()=>{
//     pago.style.overflow='';
// })
console.log(block.getBoundingClientRect().top)
console.log(document.elementFromPoint(300,300))
console.log(window.getComputedStyle(btn[0]))