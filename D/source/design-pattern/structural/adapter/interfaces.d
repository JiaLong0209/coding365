module pattern.adapter.interfaces;

interface ICharacter {
    void attack();
    void info();
    int getPower();
}

interface MagicalAttacker{
    void performMagicalAttack();
    int getPower();
}

interface PhysicalAttacker{
    void performPhysicalAttack();
    int getPower();
}

interface RangedAttacker{
    void performRangedAttack();
    int getPower();
}
