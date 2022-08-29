
// let a = document.getElementsByClassName("demo");
// let b = document.querySelector(".demo");
// let c = document.querySelectorAll(".demo");
// console.log(a);
// console.log(b);
// console.log(c);


let text = document.querySelector("#text");
let output = document.querySelector('.output');
let button1 = document.querySelector(".button1");
button1.addEventListener('click',()=>{
    document.write("text.value");
})
let button2 = document.querySelector(".button2");
button2.addEventListener('click',()=>{
    output.innerHTML = text.value;
})

let button3 = document.querySelector(".button3");
button3.addEventListener('click',()=>{
    window.alert(text.value);
})

let button4 = document.querySelector(".button4");
button4.addEventListener('click',()=>{
    console.log(text.value);
})
