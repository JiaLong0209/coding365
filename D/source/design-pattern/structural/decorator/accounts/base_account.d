module pattern.decorator.accounts.base;

import std.stdio;

interface BankAccount {
    void deposit(double amount);
    void withdraw(double amount);
    void info();
    double getBalance();
}


class BaseAccount : BankAccount{
    string accountHolder;
    double balance;
    
    this(string accountHolder, double initialDeposit){
        this.accountHolder = accountHolder;
        this.balance = initialDeposit;
    }

    void deposit(double amount){
        balance += amount;
        writefln("%s deposited: $%f", accountHolder, balance);
    }

    void withdraw(double amount){
        balance -= amount;
        writefln("%s withdrew: $%f", accountHolder, balance);
    }

    void info(){
        writefln("Normal Account: %s, Balance: %f", accountHolder, balance);
    }

    double getBalance(){
        return balance;
    }

}


