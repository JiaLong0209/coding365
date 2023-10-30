window.onload = () => {
    console.log('hello google translate');
    let length, audioButtons;
    let audioSelector = 'div.m0Qfkd span button';
    let textSelector = 'textarea.er8xn';
    let inputText = document.querySelector(textSelector);

    function switchLangs() {
        document.querySelector('.lRTpdf').click();
    }

    function focusInputText() {
        setTimeout(() => {
            inputText.focus()
        }, 1);
    }

    function clearInputText() {
        focusInputText();
        inputText.value = ''
    }

    function init() {
        audioButtons = [document.querySelectorAll(audioSelector)[0], document.querySelectorAll(audioSelector)[1]]
    }

    function keydownListener(e) {
        if (e.key == '`') {
            focusInputText();
        }
        if (!e.altKey) return;
        switch (e.key.toLowerCase()) {
            case 'o':
                focusInputText();
                break;

            case 'j':
                audioButtons[0]?.click();
                break;

            case 'k':
                audioButtons[1]?.click();
                break;

            case 'r':
                init();
                break;

            case 's':
            case 'i':
                switchLangs();
                break;

            case 'u':
                clearInputText();
                break;

        }
    }
    document.addEventListener('keydown', keydownListener);
    setInterval(init, 500)
}