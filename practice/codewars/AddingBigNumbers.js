function add (a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop()
      res = c % 10 + res
      c = c > 9
    }
    return res
  }

  function myAdd(a, b) {
    let arrA = a.split('');
    let arrB = b.split('');
    let sum = [];
    let dist = arrA.length-arrB.length;
    if(dist > 0){
      for(let i = 0;i < dist;i++){
        arrB.unshift('0');
      }
    }else{
      for(let i = 0;i < Math.abs(dist);i++){
        arrA.unshift('0');
      }
    }
    let next = 0;
    for(let i = arrA.length-1; i >= 0;i--){
      sum[i]=Number(arrA[i])+Number(arrB[i]);
      sum[i]+=next;
      if(sum[i]>=10){
        sum[i]=sum[i]%10;
        next = 1;
        if(i==0) sum.unshift(1);
        continue;
      }
      next = 0;
    }
    console.log(a,b)
    console.log(sum.join(''))
    return sum.join('');
  } 
