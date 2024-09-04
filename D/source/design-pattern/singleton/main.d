module pattern.singleton.test;

import pattern.singleton.game_manager;
import std.stdio;
import std.conv;

void singleton_main(){
    auto game = GameManager.getInstance();
    writeln("Starting the game...");

    foreach(i ; 0..10){
        game.addExp(i*i*100);
    }
    game.info();

}


