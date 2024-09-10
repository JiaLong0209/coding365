
module pattern.adapter.combat_simulation;

import pattern.adapter.character;
import pattern.adapter.interfaces;
import pattern.adapter.enemy;
import std.stdio;


void combat(ICharacter attacker, Enemy enemy){
    writeln("\n=== Combat Start ===");
    attacker.info();
    attacker.attack();
    enemy.receiveDamage(attacker.getPower());
    writeln("=== Combat End ===\n");
    
}
