
module pattern.observer.notification_system;

import std.stdio;

class NotificationSystem {

    string[] notifications;

    void add(string notification){
        notifications ~= notification;
    }

    void display(){
        foreach(notification ; notifications){
            writeln(notification);
        }
    }

}

