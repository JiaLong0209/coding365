class Node{
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
};

class LinkList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    inserFirst(data){
        this.head = new Node(data, this.head);
        this.size += 1;

    }
    removeAtIndex(index){
        let current = this.head;

        if(!index){
            this.head = current.next;
        }else{
            for(let i = 0; i < index -1; i++){
                current = current.next;
            }
            let t = current;
            current.next = t.next.next;
        }
        this.size -= 1;
    }
    printList(reverse = 0){
        let current = this.head;
        if(!reverse){
            for(let i = 0; i < this.size; current = current.next, i++){
                console.log(`${i}: ${current.data}`)
            }
        }else{
            for(let i = this.size; i > 0; current = current.next, i--){
                console.log(`${i-1}: ${current.data}`)
            }
        }
    }
    forEach(callback){
        let current = this.head;
        for(let i = 0; i < this.size; i++){
            callback(current);   
            current = current.next;
        }

    }

};

class Stack{
    constructor(){
        this.top = 0;
        this.stack = new LinkList();
    }
    push(data){
        this.stack.inserFirst(data);
        this.top += 1;
    }
    pop(){
        this.stack.removeAtIndex(0);
        this.top -= 1;
    }
    printStack(){
        this.stack.printList(1);
    }

    forEach(callback){
        this.stack.forEach(callback);
    }

};

let a = new LinkList();
console.log(` LinkList : \n`)
a.inserFirst(100);
a.inserFirst(200);
a.inserFirst(300);
a.removeAtIndex(0);
a.inserFirst(400);
a.forEach((x)=>{x.data *= 10})
a.printList();

let b = new Stack();
console.log(`\nStack : \n`)
b.push(100);
b.push(200);
b.push(300);
b.pop();
b.push(400)
b.forEach(x=>{x.data *= 10})
b.printStack();