class Node {
    constructor(Data, Next){
        this.data = Data;
        this.next = Next;

    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    inserFirst(Data){
        let node = new Node(Data,this.head);
        this.head = node;
        this.size += 1;
    }

};

// let a = new Node(100,null);
// let b = new Node(200,a);
// let c = new Node(300,b);

// console.log(a);
// console.log(b);
// console.log(c);


let list = new LinkedList();

list.inserFirst(100);
list.inserFirst(200);

console.log(list);