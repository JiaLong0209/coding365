function animalHouse(name,i){
    var count = 0;
    let x = i;
    function countDogs(){
        count += x;
        console.log(count + " " +name)
    }
    return countDogs;
}
var countDog = animalHouse('dogs',3);
var countCat = animalHouse('cats',3);
var countPig = animalHouse('pigs',3);

countDog();
countDog();
countDog();
countCat();
countCat();
countCat();
countPig();
countPig();
countPig();


// function dogHouse(name) {
//     var count = 0;
//     function countDogs() {
//         count += 1;
//         console.log(count + ' '+ name);
//     }
//     return countDogs;
// }
// var countGolden = dogHouse("Golden");
// var countPug = dogHouse("Pug");
// var countPuppy = dogHouse("Puppy");
// countGolden(); 
// countGolden(); 
// countPug(); 
// countPuppy(); 
// countGolden(); 
// countPug(); 