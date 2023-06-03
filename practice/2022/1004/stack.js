class Stack{
    constructor(){
        this.top = 0;
        this.data = [];
    }

    push(data){
        this.data[this.data.length] = data;
        this.top += 1;
    }

    pop(){
        this.data.pop();
        this.top -= 1;
        // console.log(this.data[this.top]);
    }

    print(){
        for(let i of this.data){
            console.log(i);
        }
    }


};

let a = new Stack();
a.push(6);
a.push(34);
a.push(52);

// a.pop();
// a.pop();
// a.pop();
a.print();