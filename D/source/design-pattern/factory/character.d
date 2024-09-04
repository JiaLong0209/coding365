module pattern.factory.character;

import pattern.factory.factory;

import std.stdio;

abstract class Character {
    string job;
    string name;
    int damage;
    int health;
    int specialAttackBuff;

    this(string name, int health, int damage){
        this.name = name;
        this.health = health;
        this.damage = damage;
    }


    void attack(){
        writefln("%s(%s), attacks with damage: %d!", name, job, damage);
    }

    abstract void specialAttack();

}

class Warrior: Character {
    this(string name, int health, int damage){
        super(name, health, damage);
        job = characterEnum.warrior;
        specialAttackBuff = 2;
    }
    
    override void specialAttack(){
        writefln("%s(%s) performs a powerful sword slash with damages: %d.",name, job, damage*specialAttackBuff);
    }
}

class Mage: Character {
    this(string name, int health, int damage){
        super(name, health, damage);
        job = characterEnum.mage;
        specialAttackBuff = 3;
    }

    override void specialAttack(){
        writefln("%s(%s) casts a mighty fireball with damage: %d ", name, job, damage * specialAttackBuff);
    }
}


class Archer: Character{
    this(string name, int health, int damage){
        super(name, health, damage);
        job = characterEnum.archer;
        specialAttackBuff = 3;
    }

    override void specialAttack(){
        writefln("%s(%s) shoots a piercing arrow with damage: %d!",name ,job, damage * specialAttackBuff);
    }
}


