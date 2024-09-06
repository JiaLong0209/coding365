
module pattern.builder.character_builder;

import pattern.builder.character;
import pattern.builder.equipment;


class CharacterBuilder {

    string name;
    int health;
    int strength;
    int agility;
    int intelligence;
    Weapon weapon;
    Armor armor;

    CharacterBuilder setName(string name){
        this.name = name;
        return this;
    }

    CharacterBuilder setAttributes(int health = 100, int strength = 50, int agility = 50, int intelligence = 50) {
        this.health = health;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
        return this;
    }

    CharacterBuilder setEquipments(Weapon weapon, Armor armor){
        this.weapon = weapon;
        this.armor  = armor;
        return this;
    }

    Character build(){
        return new Character( name, health, strength, agility, intelligence, weapon, armor);
    }

    CharacterBuilder setHealth(int health){
        this.health = health;
        return this;
    }

    CharacterBuilder setStrength(int strength){
        this.strength = strength;
        return this;
    }

    CharacterBuilder setAgility(int agility){
        this.agility = agility;
        return this;
    }

    CharacterBuilder setIntelligence(int intelligence){
        this.intelligence = intelligence;
        return this;
    }

    CharacterBuilder setWeapon(Weapon weapon){
        this.weapon = weapon;
        return this;
    }

    CharacterBuilder setArmor(Armor armor){
        this.armor = armor;
        return this;
    }

}
