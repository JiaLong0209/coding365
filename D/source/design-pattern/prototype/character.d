
module pattern.prototype.character;

import pattern.prototype.abilities;
import std.stdio;

class Character{

    string name;
    int health;
    int strength;
    int agility;
    int intelligence;
    string weapon;
    string armor;

    Ability[] abilities;

    this(string name, int health, int strength, int agility, int intelligence, string weapon, string armor, Ability[] abilities){
       this.name = name;
        this.health = health;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
        this.weapon = weapon;
        this.armor = armor;
        this.abilities = abilities;
    }

    void info(){
        writeln();
        writeln("Name: ", name);
        writeln("Health: ", health);
        writeln("Strength: ", strength);
        writeln("Agility: ", agility);
        writeln("Intelligence: ", intelligence);
        writeln("Weapon: ", weapon);
        writeln("Armor: ", armor);
        foreach (ability ; abilities){
            writefln("- %s (Power: %d)", ability.name, ability.power);
        }
    }

    Character clone(){
        return new Character(name, health, strength, agility, intelligence, weapon, armor, abilities.dup);
    }

    void useAbilities(){
        foreach (ability; abilities){
            ability.use();
        }
    }


    Character setName(string name){
        this.name = name;
        return this;
    }

    Character setHealth(int health){
        this.health = health;
        return this;
    }

    Character setStrength(int strength){
        this.strength = strength;
        return this;
    }

    Character setAgility(int agility){
        this.agility = agility;
        return this;
    }

    Character setIntelligence(int intelligence){
        this.intelligence = intelligence;
        return this;
    }

    Character setWeapon(string weapon){
        this.weapon = weapon;
        return this;
    }

    Character setArmor(string armor){
        this.armor = armor;
        return this;
    }

    Character setAbilities(Ability[] abilities){
        this.abilities = abilities;
        return this;
    }

    Character addHealth(int health){
        this.health += health;
        return this;
    }

    Character addStrength(int strength){
        this.strength += strength;
        return this;
    }

    Character addAgility(int agility){
        this.agility += agility;
        return this;
    }

    Character addIntelligence(int intelligence){
        this.intelligence += intelligence;
        return this;
    }

    Character addAbilities(Ability[] abilities){
        this.abilities ~= abilities;
        return this;
    }

}
