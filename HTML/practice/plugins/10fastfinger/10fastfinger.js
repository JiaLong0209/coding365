let w, input;
let origin = window.origin;
let url = window.location.href.split('/');
let mode = url[3];
switch(origin){
    case 'https://10fastfingers.com':
        inputSelector = mode.match(/typing-test|competition/) ? '#inputfield' : '#text_typed';
        input = document.querySelector(inputSelector);
        input.addEventListener('keydown',(e)=> e.which == '32' ? input.value = words[word_pointer]: null)
        break;

    case 'https://10ff.net':
        w = Array.from(document.querySelectorAll('.place > span')).map(i => i.innerText);
        input = document.querySelector('input[type="text"]');
        input.addEventListener('keydown',(e)=> e.which == '32' ? input.value = w.shift() : null)
        break;
    default:
        console.log("It's not 10 fast 10fastfingers")
        break;
}
window.setInterval(() => {
    if(origin == 'https://10ff.net') return;
    w = words;
}, 200);

// document.querySelector('#inputfield').addEventListener('keydown', (e)=> e.which == '32' ? document.querySelector('#inputfield').value = words[word_pointer] : null);