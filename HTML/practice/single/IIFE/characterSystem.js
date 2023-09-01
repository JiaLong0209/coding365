const { toHandlerKey } = require("vue");

var characterSystem = (function() {
    // Private variables
    var characterList = [];
    // Character constructor
    class Character {
        constructor(name, health, damage, comboRate = 0) {
            this.name = name;
            this.health = health;
            this.damage = damage;
            this.comboRate = comboRate;
        }
    }

    // Public methods
    return {
        gameover: false,
        createCharacter: function(name, health, damage, comboRate = 0) {
            var character = new Character(name, health, damage, comboRate);
            characterList.push(character);
            return character;
        },
        attack: async function(attacker, target, combo = 1) {

            if (attacker.health <= 0) {
                this.gameover = true
                // console.log(attacker.name + " is already defeated.");
                return;
            }
            
            console.log((attacker.name + " attacks " + target.name + " for " + ~~(attacker.damage+combo*2) + " damage ") + (combo>1 ? `(${combo} combo)` : "") );
            target.health -= attacker.damage+combo*2;
            target.health = target.health < 0 ? 0 : target.health;

            
            if (target.health <= 0) {
                console.log(target.name + " has been defeated!");
                console.log(attacker.name + " wins!");
                this.gameover = true;
                return;
            }
            
            console.log(`Name: ${target.name},health: ${target.health}\n`)
            if(Math.random() < attacker.comboRate){
                this.stop( (50-combo) < 0 ? 0 : 50-combo);
                this.attack(attacker, target, combo+1);
            }

            
            // return new Promise((resolve, reject)=>{
            //     if(Math.random() < attacker.comboRate){
            //         this.stop(100).then(() => this.attack(attacker, target, combo+1));
            //     }
                
            // })
        },
        getCharacterList: function() {
            return characterList;
        },
        stop: (ms) => {
            const end = Date.now() + ms
            while (Date.now() < end) continue
        },
        
    };
})();

// Usage
var warrior = characterSystem.createCharacter("Warrior", 1000000, 230, 0.995);
var mage = characterSystem.createCharacter("Mage", 1000000, 200, 0.995);


do{
    characterSystem.attack(warrior, mage);
    characterSystem.attack(mage, warrior);
}while(!characterSystem.gameover)

console.log("Character List:", characterSystem.getCharacterList())

// Promise.all([characterSystem.attack(warrior, mage), characterSystem.attack(mage, warrior)]).
// characterSystem.attack(warrior, mage).
//     then(characterSystem.attack(mage, warrior)).
//     then(characterSystem.stop(300)).
//     then(console.log("Character List:", characterSystem.getCharacterList()))

