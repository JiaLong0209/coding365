

// optimized 
function topThreeWords(text) {
    text = text.toLowerCase().split(/[# \/;:\\.,]/g)
            .reduce((acc,v)=>{v!=''?(acc[v]? acc[v]+=1: acc[v]=1):null;return acc},{})
    return Object.entries(text).sort((a,b)=>{return b[1]-a[1]}).map(c=>c[0]).filter(x=>{return x!="'"}).slice(0,3);
  }






// my solution
function topThreeWords_my(text) {
    text = text.toLowerCase().split(/[ #/\.,]/g)  
    let set = new Set();
    let count = {};
    for(let i of text){
      if(i != '' && !set.has(i)){
        set.add(i);
        count[i] = 0;
      }
      if(set.has(i)){
        count[i] += 1;
      }
    }
    if(count["\'"] == 1) return [];
    let first = ['',0];
    let second = ['',0];
    let thrid = ['',0];
    
    for(let i in count){
      console.log(i, count[i])
      if(count[i] > first[1] && count[i] != 0){
        thrid = [second[0],second[1]];
        second = [first[0],first[1]];
        first = [i,count[i]];
      }
      else if(count[i] <= first[1] && count[i] > second[1]){
        thrid = [second[0],second[1]];
        second = [i,count[i]];
      }
      else if(count[i] <= second[1] && count[i] > thrid[1]){
        thrid = [i,count[i]];
      }
    }
    let arr = [];
    first[1]!=0 ? arr.push(first[0]):null;
    second[1]!=0? arr.push(second[0]):null;
    thrid[1]!=0? arr.push(thrid[0]):null;
    return arr;
  }