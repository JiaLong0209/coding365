module pattern.decorator.features.interest;

import pattern.decorator.accounts.base;
import pattern.decorator.features.base;
import std.stdio;

class Interest : AccountFeature {
    double interestRate;

    this(BankAccount account, double interestRate){
        super(account);
        this.interestRate = interestRate;
    }

    void applyInterest(){
        double interest = account.getBalance() * interestRate;
        account.deposit(interest);
        writefln("Interest applied: %f", interest);
    }

    override void deposit(double amount){
        account.deposit(amount);
    }

    override void withdraw(double amount){
        account.withdraw(amount);
    }

}
