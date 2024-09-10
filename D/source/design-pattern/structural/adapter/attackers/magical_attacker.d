module pattern.adapter.magical_attacker;
import pattern.adapter.interfaces;
import std.stdio;


class FireballSpell : MagicalAttacker{
    int power;

    this(int power){
        this.power = power;
    }

    void performMagicalAttack(){
        writefln("Casting Fireball spell with %d damage!", power);
    }

    int getPower(){
        return power;
    }
}

class IceballSpell : MagicalAttacker{
    int power;

    this(int power){
        this.power = power;
    }

    void performMagicalAttack(){
        writefln("Casting Iceball spell with %d damage!", power);
    }

    int getPower(){
        return power;
    }
}
