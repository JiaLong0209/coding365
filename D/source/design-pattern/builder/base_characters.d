module pattern.builder.base_characters;
import std.stdio;

import pattern.builder.character;
import pattern.builder.character_builder;
import pattern.builder.equipment;

CharacterBuilder createWarrior (string name) {
    return new CharacterBuilder()
            .setName(name).setAttributes(health: 2000, strength: 1500)
            .setWeapon(new Weapon(WeaponType.Sword, 120))
            .setArmor(new Armor(ArmorType.Heavy, 200));
}

CharacterBuilder createMage (string name) {
    return new CharacterBuilder()
            .setName(name).setAttributes(health: 40, intelligence: 3000)
            .setWeapon(new Weapon(WeaponType.Staff, 1020))
            .setArmor(new Armor(ArmorType.Medium, 100));
}

CharacterBuilder createArcher (string name) {
    return new CharacterBuilder()
            .setName(name).setAttributes(health:85, agility: 1200)
            .setWeapon(new Weapon(WeaponType.Bow, 520))
            .setArmor(new Armor(ArmorType.Light, 40));
}

