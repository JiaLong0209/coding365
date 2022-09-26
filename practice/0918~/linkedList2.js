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

    inserLast(Data){
        let node = new Node(Data);
        let current;

        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size += 1;
    }
    getAtIndex(index){
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next
        }
        return current.data;
    }
    printListData(){
        let current = this.head;
        let str = "";

        while(current){
            console.log(current.data)
            // current.next != null? str += `${current.data} -> `: str += `${current.data}`;
            current = current.next;

        }

        // console.log(str);
    }

};

// let a = new Node(100,null);
// let b = new Node(200,a);
// let c = new Node(300,b);

// console.log(a);
// console.log(b);
// console.log(c);


let list = new LinkedList();
let arr = [];
// list.inserFirst(100);
// list.inserFirst(200);

// console.log(list);
// list.printListData();


// TEST


let n = 50000;
let num = 500000;
let TimeStart = new Date();

for(let i = 0; i < n; i++){
    let random = Math.round(Math.random() * num);
    arr.push(random);
}

let TimeEnd = new Date();
let ExeTime = (TimeEnd - TimeStart)/1000;

console.log(ExeTime+"s");


let listTimeStart = new Date();

for(let i = 0; i < n; i++){
    let random = Math.round(Math.random() * num);
    list.inserLast(random);
}

let listTimeEnd = new Date();
let listExeTime = (listTimeEnd - listTimeStart)/1000
console.log(listExeTime+"s");

console.log(arr[arr.length-1]);
console.log(list.getAtIndex(list.size-1));
// list.inserFirst(100);
// list.inserFirst(200);
// console.log(list);
// console.log(arr);
// list.printListData();