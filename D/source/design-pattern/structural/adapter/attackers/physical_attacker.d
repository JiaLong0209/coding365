module pattern.adapter.physical_attacker;
import pattern.adapter.interfaces;
import std.stdio;


class SwordAttack : PhysicalAttacker{
    int power;

    this(int power){
        this.power = power;
    }

    void performPhysicalAttack(){
        writefln("Slashing with a sword with %d damage!", power);
    }
    int getPower(){
        return power;
    }
}

