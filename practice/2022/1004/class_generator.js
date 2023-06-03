class Polygon{
    constructor(...sides){
        this.sides = sides;
    }
    *getSides(){
        for(let i of this.sides){
            yield i;
        }
    }
}

let pentagon = new Polygon(1,2,3,4,5);

console.log(...pentagon.getSides());