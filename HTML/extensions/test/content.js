function keyListener(e){
    console.log(e.key);
}

console.log('hello MovePage');

document.addEventListener('keypress', (e) => keyListener(e));
