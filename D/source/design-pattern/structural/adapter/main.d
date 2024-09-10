

module pattern.adapter.main;

import pattern.adapter.adapter;
import pattern.adapter.character;
import pattern.adapter.combat_simulation;
import pattern.adapter.enemy;
import pattern.adapter.attackers;

import pattern.adapter.interfaces;

import std.stdio;

void adapter_main(){
    writeln("=== Adapter Pattern Game ===");

    ICharacter[] warriors = [
        new WarriorAdapter(new Warrior("Normal Warrior", 1000), new SwordAttack(500))
        ,new WarriorAdapter(new Warrior("Abyss Warrior", 10000), new SwordAttack(2300))
        ,new WarriorAdapter(new Warrior("Shadow Warrior", 5000), new SwordAttack(4000))
    ];

    ICharacter[] mages = [
        new MageAdapter(new Mage("Fire Mage", 1000), new FireballSpell(5000))
        ,new MageAdapter(new Mage("Ice Mage", 1000), new IceballSpell(10000))
    ];

    ICharacter[] archers = [
        new ArcherAdapter(new Archer("Normal Archer", 1000), new BowAttack(5000))
        ,new ArcherAdapter(new Archer("Abyss Archer", 30000), new BowAttack(55500))
    ];


    auto enemy  = new Enemy("Orc King", 100000);

    foreach(c; warriors){
        combat(c, enemy);
    }

    foreach(c; mages){
        combat(c, enemy);
    }

    foreach(c; archers){
        combat(c, enemy);
    }

}

