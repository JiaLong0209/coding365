module pattern.adapter.adapter;

import pattern.adapter.character;
import pattern.adapter.attackers;
import pattern.adapter.interfaces;

import std.stdio;


class WarriorAdapter : ICharacter { 
    Warrior character;
    PhysicalAttacker attacker;

    this(Warrior character, PhysicalAttacker attacker){
        this.character = character;
        this.attacker = attacker;
    }

    void attack() {
        character.attack();
        attacker.performPhysicalAttack();
    }

    void info() {
        character.info();
    }

    int getPower(){
        return character.getPower() + attacker.getPower();
    }
}

class MageAdapter : ICharacter {
    Mage character;
    MagicalAttacker attacker;

    this(Mage character, MagicalAttacker attacker) {
        this.character = character;
        this.attacker = attacker;
    }

    void attack() {
        character.castSpell();
        attacker.performMagicalAttack();
    }

    void info() {
        character.info();
    }

    int getPower(){
        return character.getPower() + attacker.getPower();
    }
}

class ArcherAdapter : ICharacter {
    Archer character;
    RangedAttacker attacker;

    this(Archer character, RangedAttacker attacker) {
        this.character = character;
        this.attacker = attacker;
    }

    void attack() {
        character.rangedAttack();
        attacker.performRangedAttack();
    }

    void info() {
        character.info();
    }

    int getPower(){
        return character.getPower() + attacker.getPower();
    }
}

