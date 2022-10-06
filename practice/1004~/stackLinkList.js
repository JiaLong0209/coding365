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
    printList(){
        let current = this.head;
        for(let i = 0; i < this.size; current = current? current.next: null){
            if(current){
                console.log(current.data)
            }else{
                break;
            }
        }
    }

};

let a = new LinkList();
// a.inserFirst(100);
// a.inserFirst(200);
// a.inserFirst(300);
// a.removeAtIndex(1);
// a.printList();
