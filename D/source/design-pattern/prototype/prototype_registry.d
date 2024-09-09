
module pattern.prototype.prototype_registry;

import pattern.prototype.character_prototype;
import pattern.prototype.character_types;
import pattern.prototype.character;
import std.stdio;
import std.exception;
import std.typecons;


class PrototypeRegistry {
    private Character[CharacterTypes] registry;

    this(){
        registry[CharacterTypes.Warrior] = new WarriorPrototype();
        registry[CharacterTypes.Mage] = new MagePrototype();
        registry[CharacterTypes.Archer] = new ArcherPrototype();
    }

    Character getClone(CharacterTypes type){
        if(!(type in registry)){
            writeln("Error: No prototype registered for type: ", type);
            return null;
        }
        writeln("Cloning prototype of type: ", type);
        return registry[type].clone();
    }
}


