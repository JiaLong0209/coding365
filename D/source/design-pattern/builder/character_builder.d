
module pattern.builder.character_builder;

import pattern.builder.character;
import pattern.builder.equipment;


class CharacterBuilder {
    Character c = new Character();

    CharacterBuilder setName(string name){
        c.name = name;
        return this;
    }

    CharacterBuilder setAttributes(int health = 100, int strength = 50, int agility = 50, int intelligence = 50) {
        c.health = health;
        c.strength = strength;
        c.agility = agility;
        c.intelligence = intelligence;
        return this;
    }

    CharacterBuilder setEquipments(Weapon weapon, Armor armor){
        c.weapon = weapon;
        c.armor  = armor;
        return this;
    }

    Character build(){
        return c;
    }

    CharacterBuilder setHealth(int health){
        c.health = health;
        return this;
    }

    CharacterBuilder setStrength(int strength){
        c.strength = strength;
        return this;
    }

    CharacterBuilder setAgility(int agility){
        c.agility = agility;
        return this;
    }

    CharacterBuilder setIntelligence(int intelligence){
        c.intelligence = intelligence;
        return this;
    }

    CharacterBuilder setWeapon(Weapon weapon){
        c.weapon = weapon;
        return this;
    }

    CharacterBuilder setArmor(Armor armor){
        c.armor = armor;
        return this;
    }

}
