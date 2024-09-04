module pattern.factory.factory;

import pattern.factory.character;

/*
   The Factory Method is a creational design pattern that provides an interface for 
  creating objects in a superclass but allows subclasses to alter the type of objects
  that will be created. It lets a class defer instantiation to subclasses, promoting loose
  coupling and flexibility in the code.
*/

enum characterEnum: string{
    warrior = "Warrior",
    mage = "Mage",
    archer = "Archer",
}

class CharacterFactory{

    Character createCharacter(string characterType, string name, int health, int damage){
        switch(characterType){
            case characterEnum.warrior:
                return new Warrior(name, health, damage);
            case characterEnum.mage:
                return new Mage(name, health, damage);
            case characterEnum.archer:
                return new Archer(name, health, damage);
            default:
                throw new Exception("Unknown character type: " ~ characterType);
        }
    }
}







