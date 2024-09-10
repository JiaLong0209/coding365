
module pattern.adapter.enemy;

import std.stdio;

class Enemy {
    string name;
    int health;

    this(string name, int health){
        this.name = name;
        this.health = health;
    }

    void receiveDamage(int damage){
        health -= damage;
        writefln("%s takes %d damage. Health left: %d", name, damage, health > 0 ? health : 0);
        if(health <= 0){
            writefln("%s is defeated!", name);
        }
    }

}

