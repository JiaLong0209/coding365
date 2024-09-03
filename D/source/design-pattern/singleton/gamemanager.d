module pattern.singleton;

import std.stdio;

/*
   The Singleton pattern is a design pattern used to ensure that 
   a class has only one instance and provides a global point of
   access to that instance.

   It is typically used when exactly one object is needed to 
   coordinate actions across the system.
*/

class GameManager {

    static GameManager instance;
    int level;
    int levelUpExp;
    int exp;

    private: 
        this() {
            level = 1;
            exp = 0;
            levelUpExp = 50;
            writefln("Game Manager initialized!");
        }

        void nextLevel(){
            level++;
            calcLevelUpExp();
            writefln("Level up! Now at level %d, next level up exp: %d",level, levelUpExp);
        }


    public: 
        static GameManager getInstance(){
            if(instance is null){
                instance = new GameManager();
            }
            return instance;
        }

        void addExp(int point){
            exp += point;
            while(exp >= levelUpExp){
                nextLevel();
            }
            writefln("Exp added: %d, Total: %d, More Exp to Level Up: %d ", point , exp, levelUpExp-exp);
        }

        void calcLevelUpExp(){
            levelUpExp = cast(int)(cast(double)levelUpExp * 2);
        }

        void info(){
            writefln("Current State - Level: %d, Exp: %d Level Up Exp: %d", level, exp, levelUpExp);
        }

}

