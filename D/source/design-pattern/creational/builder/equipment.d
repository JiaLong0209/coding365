
module pattern.builder.equipment;

import std.conv;

enum WeaponType { Sword, Bow, Staff, Dragonslayer , PhoenixBow , EtherealWand}
enum ArmorType { Light, Medium, Heavy }


class Weapon {
    WeaponType type;
    int attackPower;

    this(WeaponType type, int attackPower){
        this.type = type;
        this.attackPower = attackPower;
    }

    string description(){
        return "`" ~ type.to!string ~ "`" ~ " with attack power " ~ attackPower.to!string;
    }
}

class Armor {
    ArmorType type;
    int defensePower;

    this(ArmorType type, int defensePower){
        this.type = type;
        this.defensePower = defensePower;
    }

    string description(){
        return "`" ~ type.to!string ~ "`" ~ " armor with defense power " ~ defensePower.to!string;
    }
}
