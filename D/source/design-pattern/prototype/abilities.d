
module pattern.prototype.abilities;

import std.stdio;

abstract class Ability {
    string name;
    int power;

    this(string name, int power){
        this.name = name;
        this.power = power;
    }

    void setName(string name){
        this.name = name;
    }
    
    void setPower(int power){
        this.power = power;
    }

    abstract void use();
}

class Fireball : Ability {  
    this(string name = "Fireball", int power = 500){
        super(name, power);
    }
    override void use(){
        writefln("Casting %s with power %d!", name, power);
    }
}

class Heal : Ability {  
    this(string name ="Heal", int power = 300){
        super(name, power);
    }
    override void use(){
        writefln("Using %s to restore %d health!", name, power);
    }
}

class Stealth : Ability {  
    this(string name = "Stealth", int power = 2000){
        super(name, power);
    }
    override void use(){
        writefln("Activating %s to become invisible for %d ms!", name, power);
    }
}

class Shield : Ability {  
    this(string name ="Shield", int power = 400){
        super(name, power);
    }
    override void use(){
        writefln("Summoning %s with %d defense!", name, power);
    }
}

class Speed : Ability {  
    this(string name = "Speed", int power = 600){
        super(name, power);
    }
    override void use(){
        writefln("Activating %s to increase agility by %d!", name, power);
    }
}

class Freeze : Ability {  
    this(string name = "Freeze", int power = 700){
        super(name, power);
    }
    override void use(){
        writefln("Casting %s to freeze the target for %d ms!", name, power);
    }
}

