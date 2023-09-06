window.onload = () => {
    console.log('hello google translate');
    let length, voiceButtons;
    let voiceSelector = 'div.m0Qfkd span button';
    let textSelector = 'textarea.er8xn';

    function focus(){
        setTimeout(()=>{
            document.querySelector(textSelector).focus()
        }, 1);
    }

    function init(){
        voiceButtons = [ document.querySelectorAll(voiceSelector)[0],  document.querySelectorAll(voiceSelector)[1]]
    }

    function keydownListener(e){
        if(e.key == '`') {
            focus();
        }
        if(!e.shiftKey && !e.altKey) return;
        
        switch(e.key.toLowerCase()){
            case 'j':
                voiceButtons[0].click();
                break;
    
            case 'k':
                voiceButtons[1].click();
                break;

            case 'r':
                init();
                break;

        }
    }
    document.addEventListener('keydown', keydownListener);
    setInterval(init, 1000)
}