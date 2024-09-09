
module pattern.prototype.character_prototype;

import pattern.prototype.abilities;
import pattern.prototype.character;
import std.stdio;


class WarriorPrototype : Character {
    this(){
        super("Warrior", 2000, 350, 30, 30, "Sword", "Heavy Armor", [new Stealth()]);
    }
}

class MagePrototype : Character {
    this(){
        super("Mage", 500, 50, 200, 500, "Staff", "Mystic Robe", [new Fireball(), new Heal()]);
    }
}

class ArcherPrototype : Character {
    this(){
        super("Archer", 1000, 200, 300, 50, "Bow", "Light Armor", [new Stealth()]);
    }
}

