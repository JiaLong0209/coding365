module pattern.prototype.main;

import pattern.prototype.character;
import pattern.prototype.abilities;
import pattern.prototype.prototype_registry;
import pattern.prototype.character_types;
import std.stdio;



void displayAllCharacters(Character[] characters){
    writeln("\n========= Character Info =========");
    foreach (c ; characters){
        c.info();
        c.useAbilities();
    }
}

// Factory Method and Builder
Character getShadowKnight(PrototypeRegistry registry){
    return registry.getClone(CharacterTypes.Warrior)
        .setName("Shadow Knight")
        .setHealth(100000)
        .setStrength(50000)
        .setWeapon("Abyss Sword")
        .setArmor("Infernal Warplate")
        .addAbilities([new Heal(power: 10000)]);
}

void prototype_main(){
    writeln("Prototype: Game Start!");

    auto registry = new PrototypeRegistry();

    Character[] characters = [
        registry.getClone(CharacterTypes.Warrior),
        registry.getClone(CharacterTypes.Mage),
        registry.getClone(CharacterTypes.Archer),
        getShadowKnight(registry),
    ];

    displayAllCharacters(characters);
}



