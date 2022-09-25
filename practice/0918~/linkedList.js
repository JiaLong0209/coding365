

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

        for(let i = 0; i < this.size; i++){
            if(i == index){
                console.log("\n"+current.data);
                return null;
            }
            if(current.next != null){
                current = current.next;
            }
        }
        return null;
    }

    removeAtIndex(index){

        if(index === 0){
            
        }else{
            for(let i = 0; i < this.size; i++){
    
            }
            
        }
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

    forEach(){

    }

}


let list = new LinkedList();

list.inserLastNode(100);
list.inserLastNode(200);
list.inserLastNode(300);

list.insertAtIndex(400,1);

list.printListData();

list.getAtIndex(0)