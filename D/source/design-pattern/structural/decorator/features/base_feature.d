module pattern.decorator.features.base;

import pattern.decorator.accounts.base;

abstract class AccountFeature : BankAccount {
    BankAccount account;

    this(BankAccount account){
        this.account = account;
    }

    abstract void deposit(double amount);
    abstract void withdraw(double amount);

    void info(){
        account.info();
    }

    double getBalance(){
        return account.getBalance();
    }

}
