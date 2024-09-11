module pattern.decorator.accounts.savings;

import pattern.decorator.accounts.base;
import std.stdio;

class SavingsAccount : BaseAccount{
    this(string accountHolder, double initialDeposit){
        super(accountHolder, initialDeposit);
    }

    override void info(){
        writefln("Savings Account: %s, Balance: %f", accountHolder, balance);
    }

}



