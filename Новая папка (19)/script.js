// const btn = document.querySelector(".btn")
// btn.addEventListener("click",()=>{
//     const reqest= new XMLHttpRequest();
//     reqest.open("GET","db.json");
//     reqest.setRequestHeader("Content-type","application/json; charset=utf-8")
//     reqest.send()
//     reqest.addEventListener("load", () =>{
//         if(reqest.status==200){
//         let data= JSON.parse( reqest.response);
//         console.log(data)
//         }
//         else{
//             console.log("что-то не так")
//         }
//     })
// })


fetch("db.json")
    .then(x => x.json())
    .then(x=>console.log(x))
    .catch(()=>console.log("что-то не так"))