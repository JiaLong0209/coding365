module pattern.builder.character;

import pattern.builder.equipment;
import std.stdio;


class Character {
    string name;
    int health;
    int strength;
    int agility;
    int intelligence;

    Weapon weapon;
    Armor armor;


    void info(){
        writeln("\n------- ", name, " -----");
        writeln("Health: ", health);
        writeln("Strength: ", strength);
        writeln("Agility: ", agility);
        writeln("Intelligence: ", intelligence);

        writeln("Equipped Weapon: ", weapon ? weapon.description : "None");
        writeln("Equipped Armor: ", armor ? armor.description : "None");
    }
    
}

