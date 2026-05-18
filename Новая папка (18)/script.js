// const user={
//     name:'ffd',
//     agw: 67,

//     print(){
//         console.log(user.agw,user.name);
//         },
// };

// user.passport = true


// console.log(user.agw)
// user.print()

// class Avava{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     show(){
//         console.log(this.name,this.age);
//     }
// }

// const user1=new Avava('danil',67) 
// const user2=new Avava('kolbasenko',67) 

// console.log(user1)
// user1.show
//====================================================================================
// const block=document.querySelector('.block')

// class Ava{
//     constructor(img,title,text,price){
//         this.img=img;
//         this.title=title;
//         this.text=text;
//         this.price=price;
//     }

//     render(){
//         block.insertAdjacentHTML('afterbegin',`
//             <div class="card">
//             <img src=${this.img} alt=${this.title} class="pic">
//             <h2 class="card_title">${this.title}</h2>
//              <p class="card_text">${this.text}</p>
//             <p class="price">${this.price}$</p>
//             <button class="btn">TAP</button>
//         </div>
//             `)
//     }

// }
// const allTovar=[
//     {img:'./1.jpg', title:'qeweqe',text:'wqeqweq',price:9999},
//     {img:'./1.jpg', title:'qeweqe',text:'wqeqweq',price:9999},
//     {img:'./1.jpg', title:'qeweqe',text:'wqeqweq',price:9999},
//     {img:'./1.jpg', title:'qeweqe',text:'wqeqweq',price:9999},
//     {img:'./1.jpg', title:'qeweqe',text:'wqeqweq',price:9999}
// ]

// const firstobj=new Ava(
//     './2.jpg',
//     'newobj',
//     'newnewnewnewOBJ',
//     999999999,);
// firstobj.render()

// allTovar.forEach((item)=>new Ava({...item}).render())
//=======================================================================================

class NS{
    constructor(){
        this.login='Grisha';
        this.password='lol_lol';

    }
    print(){
        console.log(this.login,this.password);
    }
}

const st0=new NS('Grisha','lol_lol')

st0.print();

class IS extends NS{
    constructor(login,password,contry){
        super(login,password);
        this.country=country;
    };
}
class Tablet{
    constructor(brend,price,size){
        this.brend=brend;
        this.price=price;
        this.size=size;
    }
    info(){
        console.log(`Планшет oт ${this.brend}, размер экрана ${this.size},цена-${this.price}`)
    }
}
const tab1= new Tablet('Digma','10',10000000)
const tab2= new Tablet('Sumsung','7',10000000)
class GT extends Tablet{
    constructor(brend,size,price,cpu){
        super(brend,price,size)
        this.cpu=cpu;
    }
    info(){
        console.log(`Game Планшет oт ${this.brend}, размер экрана ${this.size},цена-${this.price},proc-${this.cpu}`)
    }
}
const g1 = new GT('Asus','13',99999999999999,'2,4Ghz')