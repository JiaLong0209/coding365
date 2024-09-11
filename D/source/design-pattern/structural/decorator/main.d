
module pattern.decorator.main;

import pattern.decorator.accounts;
import pattern.decorator.features;

import std.stdio;

void decorator_main(){
    writeln("===== Decorator Main =====");

    BankAccount savings = new SavingsAccount("Arch", 14000);
    BankAccount checking = new CheckingAccount("Garuda", 30000);
    
    writeln("\n--- Before Features ---");
    savings.info();
    checking.info();

    auto interestSavings = new Interest(savings, 0.10);
    auto overdraftChecking = new Overdraft(checking, 25000);
    auto cashbashChecking = new Cashback(checking, 0.20);

    writeln("\n--- After Features ---");
    
    interestSavings.info();
    interestSavings.applyInterest();
    interestSavings.applyInterest();
    interestSavings.applyInterest();

    writeln("----");
    overdraftChecking.info();
    overdraftChecking.withdraw(3000);
    overdraftChecking.info();
    overdraftChecking.withdraw(3000);

    cashbashChecking.info();
    cashbashChecking.deposit(5000);

    overdraftChecking.withdraw(3000);
    cashbashChecking.info();
    overdraftChecking.info();
}










