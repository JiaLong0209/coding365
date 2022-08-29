// See https://aka.ms/new-console-template for more information
using System;

namespace ConsoleApp1{
    class Program{
        static void Main(string[] args){
            string? firstName,lastName;   // Nullable type
            Console.Write("Enter your first name: ");
            firstName = Console.ReadLine();
            Console.Write("Enter your last name: ");
            lastName = Console.ReadLine();
            Console.Write("Your full name is "+firstName+" "+lastName+"\n");
            
        }
    }
}