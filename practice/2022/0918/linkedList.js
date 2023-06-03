

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
        this.size += 1;
    }

    insertAtIndex(data,index){
        if(index < 0 && index+1 > this.size){
            return;
        }

        let node = new Node(data)
        let current = this.head;
        for(let i = 0; i < index-1; i++){
        }   

        node.next = current.next;
        current.next = node;
        this.size += 1;

    }

    getAtIndex(index){
        let current = this.head;

        for(let i = 0; i < index; i++){
            current = current.next;
        }
        console.log(current.data)
        return null;
    }

    removeAtIndex(index){
        let current = this.head;

        if(index === 0){
            this.head = current.next;
        }else{
            for(let i = 0; i < index-1; i++){
                current = current.next;
            }
            let t = current;
            current.next = t.next.next;
            
            
        }

        this.size -= 1;
    }

    clearList(){
        this.head = null;
        this.size = 0;
    }

    printListData(){
        let current = this.head;
        let str = "";
        while(current){
            current.next != null?str += `${current.data} -> ` : str += `${current.data}`;
            current = current.next;
        }
        console.log(str)
    }
    forEach(){

    }

}


let list = new LinkedList();

list.inserLastNode(100);
list.inserLastNode(200);
list.inserLastNode(300);
list.insertAtIndex(400,1);

list.printListData();

list.getAtIndex(list.size-1)

list.removeAtIndex(2);
list.printListData();

list.clearList();
list.inserFirst(800)
list.printListData();