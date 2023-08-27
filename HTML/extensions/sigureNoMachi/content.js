/*      DevLogs
    230827  v1.0    create 時雨の街 Extension



    TODO 20230622~
    1. copy selected text                   20230627 v. 
    2. temporary text bar                   20230814 v.
    3. move mouse pointer by pressing key
    4. select and copy word by pressing key
    5. code refactoring
    6. decrease the volume of the sound     20230630 v.
    7. smoother page move
    8. copy text without <rt> tag (平仮名)
    9. hidden 平仮名 hotkey 't'              20230803 v.

*/
let box, active,audio , table, input, prev, next, tablePrev, tableNext, list, breadcrumbs, articles, vocabularyTables, rts;
let shiftNums = ['!','@','#','$','%']; 
let vocabularys = [];
let vocabularyString = '';
let printVocabularyMode = 1; // console each line == 0, console vocabularyString == 1
let spacing = 8;
let isMouseDown = false;
let hiddenHinagara = false;
let tempTextBar = document.createElement('input');
let tempTextBarStyle = document.createElement('style');
let animationTime = '0.15s'
let tempTextBarToggleTime = 150


function changeTablePage(direction){
    tablePrev = document.querySelector('#myTable_previous');
    tableNext = document.querySelector('#myTable_next');
    if(!(tablePrev || tableNext)) return;
    direction == 'left' ? tablePrev.click() : tableNext.click();
    list = document.querySelectorAll('#myTable a');
}

function goToPageByNumber(n){
    if(list.length != 0){
        window.location.href = (list[n-1] && n) ? list[n-1].href : list[9].href;
    }else{
        let url = document.querySelectorAll('div[itemprop="articleBody"] tbody td a')[n-1]?.href;
        if(url) window.location.href = url;
        // window.location.href = vocabularyTables[0].children[1].children[n-1].children[0].children[0].href 
    }
}

function goToBreadcrumbByNumber(n){
    breadcrumbs[n-1] ? window.location.href = breadcrumbs[n-1].href : null;
}

function goToArticleByNumber(n){
    articles[n-1] ? window.location.href = articles[n-1].href : null;
}

function openBreadCrumbTabByNumber(n){
    breadcrumbs[n-1] ? window.open(breadcrumbs[n-1].href,'_blank') : null;
}

function focusInput(){
    setTimeout(() => {
       tempTextBar.focus();
    }, tempTextBarToggleTime);
}

function toggleSearchBar(){ 
    if(active){
        tempTextBar.style.animation = `slideIn ${animationTime} forwards`
        tempTextBar.style.opacity = '0.9';
        tempTextBar.style.display = 'block';
        focusInput();
    }
    else{
        tempTextBar.style.animation = `slideOut ${animationTime} forwards`
        setTimeout(() => {
            tempTextBar.style.display = 'none';
        }, tempTextBarToggleTime);
    }
}

function vocabularyFormat(str){
    let diff = spacing - str.length;
    if(diff > 0){
        for(let i = 0; i < diff; i++){
            str += ' ';
        }
    }
    return str;
}

async function copy(str){
    try {
        await navigator.clipboard.writeText(str);
        console.log(`Copied: \n${str}`);
    }catch (err){
        console.log('Failed to copy: ', err);
    }
}

function calculateVocabularyCount(){
    let temp = [];
    vocabularyString = '';
    
    for(let i in vocabularyTables){
        let childs = [...vocabularyTables[i]?.children];
        for(let j in childs[1].children){
            if(j != 0 && j < childs[1].children.length){
                temp.push(childs[1].children[j]);
                for(let k of childs[1].children[j].children){
                    vocabularyString += `${vocabularyFormat(k.innerText)} `;
                }
                vocabularyString += '\n';
            }
            if(j == childs[1].children.length -1){
                temp.push('');
                vocabularyString += '\n';
            }
        }
        vocabularys = temp;
    }

    count = vocabularys.length - vocabularyTables.length;
    vocabularyString += `Vocabulary Count: ${count}\n`;
    printVocabulary();
    copy(vocabularyString);
}

function printVocabulary(){
    if(printVocabularyMode){
        console.log(vocabularyString);
    }else {
        for(let i of vocabularys) console.log(typeof i == 'object' ? i.innerText : i);
        console.log(`Vocabulary Count: ${count}`);
    }
}

function isTempTextBarHotkey(key){
    return key == 'Escapse' || key == 'Tab' || key == '/';
}

function keyListener(e){
    if(active && !isTempTextBarHotkey(e.key)) return;
    switch (e.key){
        case "Escape": case "Tab": case "/":   // open search bar
            e.preventDefault();
            active = !active;
            toggleSearchBar();
            break;
        case "ArrowLeft": case '[': case '-': case '{': case '_':   // move tablePage to left, or go to previous website
            if(e.altKey || e.ctrlKey || !e.shiftKey) return;
            e.preventDefault();
            !(prev || next) ? changeTablePage('left') : window.location.href = prev.href;
            break;
        
        case "ArrowRight": case ']': case '=': case '}': case '+':  // move tablePage to right, or go to next website
            if(e.altKey || e.ctrlKey || !e.shiftKey) return;
            e.preventDefault();
            !(prev || next ) ? changeTablePage('right') : window.location.href = next.href;
            break;
        
        case '`':   // focus to searchBar
            console.log('focus');
            focusInput();
            break;

        case ' ':
            e.preventDefault();
            break;

        case 'C':
            calculateVocabularyCount();
            break;

        case 't':
            hiddenRts();
            break;
        default:
            if(e.key.match(/[0-9]/) && !e.ctrlKey) goToPageByNumber(e.key);
            if(e.key.match(/[!@#$%]/)) {
                let n = shiftNums.findIndex(i => i == e.key)+1;
                e.ctrlKey ? e.altKey ? openBreadCrumbTabByNumber(n) : goToArticleByNumber(n): goToBreadcrumbByNumber(n);
            };
            break;
    } 
}

function hiddenRts(){
    hiddenHinagara = !hiddenHinagara
    for(let i of rts){
        i.style.display = hiddenHinagara ? 'none' : 'block'
    }
}

function copyTextByClick(e){
    let text = [...e.target.innerText];
    let str = '';

    if(text.length == 0 || !isMouseDown) return;
    if(text.findIndex(i => i == '\n') != -1){
        str = text.slice(0, text.findIndex(i => i == '\n')+1).join('');  
        copy(str);
    }else{
        copy(text.join(''));
    }
}

function mouseDownHandler(){
    isMouseDown = true;
}

function copySelectedText(){
    if(!document.getSelection().toString()) return;
    copy(document.getSelection().toString());
    isMouseDown = false;
}

function setTempTextBarStyle(){
    tempTextBar.id = 'tempTextBar'
    let css = `
    input#tempTextBar {
        display: none;
        position: sticky;
        bottom: 15%;
        width: 50vw;
        height: 35px;
        text-align: center;
        border: solid #262841 3px;
        border-radius: 10px;
        margin: auto;
        background: #2b374ddd;
        color: #ccc;
        z-index: 100;
        animation: slideIn 0.2s forwards;
    }
    
    @keyframes slideIn{
        
        0% {
            transform: translateY(120px);
            opacity: 0;
        }
        
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @keyframes slideOut{
        
        0% {
            transform: translateY(0px);
            opacity: 1;
        }
        100% {
            transform: translateY(120px);
            opacity: 0;
        }
    }
    `
    tempTextBarStyle.appendChild(document.createTextNode(css));
    document.head.appendChild(tempTextBarStyle)
    
}

function init(){

    box = document.querySelector('#srchBox');
    table = document.querySelector('#srch');
    input = document.querySelector('.gsc-input input');
    prev = document.querySelector('.previous a');
    next = document.querySelector('.next a');
    list = document.querySelectorAll('#myTable a')
    breadcrumbs = document.querySelectorAll('#breadcrumbs li a');
    articles = document.querySelectorAll('article div:nth-child(2) li a');
    active = false;
    vocabularyTables = Array.from(document.querySelectorAll('div[itemprop="articleBody"] table')).slice(0, -3);
    rts = document.querySelectorAll('rt')
    // audio.volume = 0.9;
    document.body.appendChild(tempTextBar)
    
    setTempTextBarStyle()

}

window.onload = () => {
    console.log("hello 時雨の町")
    init();
    window.addEventListener('keydown', keyListener);
    window.addEventListener('click', copyTextByClick);
    window.addEventListener('mousedown', mouseDownHandler)
    window.addEventListener('mouseup', copySelectedText)
}


