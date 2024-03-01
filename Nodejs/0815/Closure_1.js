function dogHouse(){
    let count = 0;
    function countDogs(){
        count += 1;
        console.log(count + " dogs");

    }
    return countDogs;
}

const countFn = dogHouse();

countFn();
countFn();
countFn();
