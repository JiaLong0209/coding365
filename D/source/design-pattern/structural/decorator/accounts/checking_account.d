module pattern.decorator.accounts.checking;

import pattern.decorator.accounts.base;
import std.stdio;

class CheckingAccount : BaseAccount{
    this(string accountHolder, double initialDeposit){
        super(accountHolder, initialDeposit);
    }

    override void info(){
        writefln("Checking Account: %s, Balance: %f", accountHolder, balance);
    }

}

