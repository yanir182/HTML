const btn = document.querySelectorAll('.btn'),
    tabs = document.querySelectorAll('.foto'),
    meme = document.querySelector('.menu');
function hiddenTabs(){
    tabs.forEach((item) => {
        item.classList.add('hidden')
        item.classList.remove('show')

    });
    btn.forEach((item)=>{
        item.classList.remove('active')
    });
}
function show(n){
    tabs[n].classList.remove('hidden')
    tabs[n].classList.add('anime','show')
    btn[n].classList.add('active')
}

hiddenTabs();
show(1);

meme.addEventListener('click',(event) => {
    let target = event.target;
    if(target.classList.contains('btn')){
        btn.forEach((item,index)=>{
            if(item===target){
                hiddenTabs()
                show(index)
            }
        })
    }
})
