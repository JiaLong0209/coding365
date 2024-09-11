module pattern.decorator.features.overdraft;

import pattern.decorator.accounts.base;
import pattern.decorator.features.base;
import std.stdio;

class Overdraft : AccountFeature {
    double overdraftLimit;

    this(BankAccount account, double overdraftLimit){
        super(account);
        this.overdraftLimit = overdraftLimit;
    }

    double getAvailableBalance(){
        return account.getBalance() - overdraftLimit;

    }

    override void deposit(double amount){
        account.deposit(amount);
    }

    override void withdraw(double amount){
        if(getAvailableBalance() - amount < 0){
            writeln("Overdraft limit reached, cannot withdraw.");
        }else{
            account.withdraw(amount);
        }
    }

    override void info(){
        account.info();
        writefln("Overdraft Limit: %f, Available Balance: %f", overdraftLimit, getAvailableBalance());

    }

}
