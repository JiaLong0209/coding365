function changeCase(identifier, targetCase){
    if(identifier == '') return '';
    let str = '';
    console.log(identifier, targetCase);
    let hasUpperCase = false;
    let hasUnderLine = false;
    let hasDash = false;
    switch(targetCase){
        case 'snake':
         hasUpperCase = false;
          for(let i of identifier){
            if(i >= "A" && i <= "Z"){
              str += '_';
              str += String.fromCharCode(i.charCodeAt() + 32)
              hasUpperCase = true;
            }else if((i == "_" || i== '-') && hasUpperCase == true){
              return undefined;
            }else if(i == "-"){
              str += "_";
            }else{
              str += i;
            }
          }
        break;
        case 'camel':
          for(let i in identifier){
            if(identifier[i] =='-' || identifier[i] == "_"){
              continue;
            }else if(identifier[i-1] == '-' || identifier[i-1] == "_"){
              str += String.fromCharCode(identifier[i].charCodeAt() - 32)
            }else{
              str += identifier[i];
            }
          }
        break;
        case 'kebab':
           hasUpperCase = false;
        
          for(let i in identifier){
            if(identifier[i] =='_' && hasDash)
              {
              return undefined;
               
            }else if((identifier[i] >= "A" && identifier[i]  <= "Z")&& hasDash){
              return undefined;
            }else if(identifier[i] >= "A" && identifier[i]  <= "Z"){
              str += "-";
              str += String.fromCharCode(identifier[i].charCodeAt() + 32)
              hasUpperCase = true;
            }else if(identifier[i] == "-"){
              hasDash = true;
              str += "-"
            }
            else if(identifier[i] == "_"){
              
              hasUnderLine = true;
              str += '-';
            }
            else{
              str += identifier[i];
            }
          }
        break;
        default:
          return undefined;
        break;
        
    }
    console.log(`result: ${str} \n`)
    return str;
  }
  