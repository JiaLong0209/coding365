function dogHouse(){
    var count = 0;
    function countDogs(){
        count += 1;
        console.log(count + ' dogs');
    }
    return countDogs;

}

function catHouse(){
    var count = 0;
    function countCats(){
        count += 1;
        console.log(count + ' cats');
    }
    return countCats;
}

const countDogs = dogHouse();
const countCats = catHouse();

countDogs();
countDogs();
countDogs();
countCats();
countCats();
countCats();

