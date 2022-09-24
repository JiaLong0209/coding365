class Node{

    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }

};

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    inserFirst(data){
        this.head = new Node(data, this.head);
        this.size += 1;
    }

    inserLastNode(data){
        let node = new Node(data);
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
    }

    insertAtIndex(data,index){

    }

    getAtIndex(index){

    }

    removeAtIndex(index){

    }

    clearList(){

    }

    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}


let list = new LinkedList();

list.inserFirst(100);
list.inserFirst(200);
list.inserFirst(300);

list.inserLastNode(400);

list.printListData();