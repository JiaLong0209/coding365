module pattern.decorator.features.cashback;

import pattern.decorator.accounts.base;
import pattern.decorator.features.base;
import std.stdio;

class Cashback : AccountFeature {
    double cashbackPercentage;

    this(BankAccount account, double cashbackPercentage){
        super(account);
        this.cashbackPercentage = cashbackPercentage;
    }

    override void deposit(double amount){
        double cashback = amount * cashbackPercentage;
        writefln("Cashback earned: %f", cashback);
        account.deposit(amount + cashback);
    }

    override void withdraw(double amount){
        account.withdraw(amount);
    }

}
