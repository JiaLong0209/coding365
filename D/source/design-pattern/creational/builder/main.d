module pattern.builder.test;

import std.stdio;

import pattern.builder.character;
import pattern.builder.character_builder;
import pattern.builder.equipment;
import pattern.builder.base_characters;



void builder_main(){
    writeln("---- Builder Pattern Main ----");

    Character[] characterList = [
        createWarrior("Normal Warrior").build(),
        createMage("Normal Mage").build(),
        createArcher("Normal Archer").build(),

        createWarrior("Eternal Warrior")
            .setAttributes(health: 50000, strength: 4000)
            .setWeapon(new Weapon( WeaponType.Dragonslayer , 1000))
            .build(),

        createArcher("Phantom Archer")
            .setAttributes(health:5000, strength: 1400, agility: 20000)
            .setWeapon(new Weapon( WeaponType.PhoenixBow , 5000))
            .build(),

        createMage("Chrono Mage")
            .setAttributes(health: 10000, intelligence: 30000)
            .setWeapon(new Weapon( WeaponType.EtherealWand , 3000))
            .build(),
    ];

    foreach(Character c; characterList){
        c.info();
    }
}

