function treeByLevels(rootNode) {
    let values = [];
    for(let i = 0; i<nodes.length; i++) {
      let nodes = [rootNode];
        if(nodes[i]){
            values.push(nodes[i].value);
            nodes.push(nodes[i].left, nodes[i].right);
        }
          console.log(`i=${i}, ${nodes.length}, ${values}`)
    }
    console.log(nodes)
    return values;
}
//  my solution
function MyTreeByLevels (rootNode) {
  if(rootNode == null) return [];
  let result = [];
  
  function height(root){
    if(root == null) return -1;
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    return leftHeight >= rightHeight? leftHeight+1 : rightHeight+1;
  }
  
  function re(node,depth){
    if(node.value!=null){
      result[depth].push(node.value);
    }
    node.left?re(node.left,depth+1): null;
    node.right?re(node.right,depth+1): null;
  }
  
  let length = height(rootNode)+1;
  console.log(length)
  
  for(let i = 0; i < length;i++){
    result[i] = [];
  }
  
  re(rootNode,0);
  
  let ans = [];
  for(let i = 0; i<result.length;i++){
    for(let j = 0; j < result[i].length; j++){
      ans.push(result[i][j])
    }
  }
  console.log(ans)
  return ans;
}


function treeByLevels_my (rootNode) {
    if(rootNode == null) return [];
  //   console.log(rootNode);
    let result = [];
    function height(root){
      if(root == null) return -1;
      let leftHeight = height(root.left);
      let rightHeight = height(root.right);
      return leftHeight >= rightHeight? leftHeight+1 : rightHeight+1;
    }
    let length = height(rootNode)+1;
    console.log(length)
    for(let i = 0; i < length;i++){
      result[i] = [];
    }
    function re(node,depth){
      if(node.value!=null){
        result[depth].push(node.value);
      }
      node.left?re(node.left,depth+1): null;
      node.right?re(node.right,depth+1): null;
    }
    re(rootNode,0);
    let ans = '';
    for(let i = 0; i<result.length;i++){
      for(let j = 0; j < result[i].length; j++){
        ans += `${result[i][j]} `;
      }
    }
    ans = ans.slice(0,ans.length-1)
    ans = ans.split(' ').map(x=>Number(x))
    console.log(ans)
    return ans;
  }