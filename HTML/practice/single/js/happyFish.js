function debateTime(str, a, b, n){
    let key = '';
    for(let i = 0; i < n; i++){
        key += '我知道';
        str += `${a}: 你又不是我，你怎麼知道${key}魚快不快樂？\n`
        key += '你知道'
        str += `${b}: 你又不是我，你怎麼知道${key}魚快不快樂？\n`
    }
    str += `魚: 人間とわなんとも面倒な生き物だなあ。。。\n`
    return str;
}

a = '莊子';
b = '惠子';
str = '';
str += `${a}: 那條魚好快樂啊！\n${b}: 你又不是魚，你怎麼知道魚快不快樂？\n`;
str = debateTime(str, a, b, 4);
console.log(str);
