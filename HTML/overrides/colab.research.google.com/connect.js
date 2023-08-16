let i = 0
function push() {
    console.log(`${++i}${'min' ? i == 1 : 'mins'}`);
    let button = document.querySelector('#connect');
    if (button) {
        console.log('found~\n', button)
        button.click()
    }
}

setInterval(push, 60000)