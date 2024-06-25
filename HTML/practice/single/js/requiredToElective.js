// https://www.ais.tku.edu.tw/COS_LOT/Student/Select

table = document.querySelectorAll('div#main table')
t = table[1]
trs = t.children[0].children

for(let i in trs){
    if(i > 0 && i < trs.length){
        for(let j in trs[i].children){
            if(j == 9){
                trs[i].children[j].innerHTML = `<font color="black">選修</font>`
            }
        } 
    }
}