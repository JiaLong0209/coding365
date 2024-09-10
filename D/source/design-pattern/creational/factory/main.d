module pattern.factory.test;

import pattern.factory.character;
import pattern.factory.factory;

import std.stdio;
import std.random;

void factory_main(){
    auto factory = new CharacterFactory();

    writeln("Welcome to Factory Game!");


    Character[] team = [
        factory.createCharacter(characterEnum.warrior, "Player1", 10000, 400),
        factory.createCharacter(characterEnum.mage, "Player2", 500, 1200),
        factory.createCharacter(characterEnum.archer, "Player3", 300, 500),
        factory.createCharacter(characterEnum.archer, "Player4", 400, 800),
        factory.createCharacter(characterEnum.archer, "Player5", 100, 3000),
    ];


    foreach (int i ; 0..5){
        writefln("\n---- Round %d ----", i);

        foreach (Character c; team){
            if(uniform(0, 10) > 5){
                c.specialAttack();
            } else{
                c.attack();
            }

            writefln("%s(%s)'s health: %d, base damage: %d\n", c.name, c.job, c.health, c.damage);
        }
    }

}




