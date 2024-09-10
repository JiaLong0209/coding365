module pattern.adapter.ranged_attacker;
import pattern.adapter.interfaces;
import std.stdio;


class BowAttack : RangedAttacker{
    int power;

    this(int power){
        this.power = power;
    }

    void performRangedAttack(){
        writefln("Shooting arrows from a bow with %d damage!", power);
    }
    int getPower(){
        return power;
    }
}

