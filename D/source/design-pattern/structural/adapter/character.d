
module pattern.adapter.character;

import pattern.adapter.interfaces;
import std.stdio;


class Warrior : ICharacter{
    string name;
    int strength; 

    this(string name, int strength){
        this.name = name;
        this.strength = strength; 
    }

    void attack(){
        writeln(name, " performs a strong physical attack!");
    }

    void info(){
        writefln("Warrior: %s, strength: %d", name , strength);
    }

    int getPower(){
        return strength;
    }

}

class Mage {
    string name;
    int intelligence; 

    this(string name, int intelligence){
        this.name = name;
        this.intelligence = intelligence; 
    }

    void castSpell() {
        writefln("%s casts a powerful magic spell!", name);
    }

    void info() {
        writefln("Mage: %s, Intelligence: %d", name, intelligence);
    }

    int getPower(){
        return intelligence;
    }

}

class Archer {
    string name;
    int agility; 

    this(string name, int agility){
        this.name = name;
        this.agility = agility; 
    }

    void rangedAttack() {
        writefln("%s performs a ranged bow attack!", name);
    }

    void info() {
        writefln("Archer: %s, Agility: %d", name, agility);
    }

    int getPower(){
        return agility;
    }

}


