
module pattern.observer.post;

import std.stdio;
import pattern.observer.user;

class Post {
    string title;
    string content;
    User author;
    User[] likes;
    string[][] comments; // [User: comment, User: comment]

    this(string title, string content){
        this.title = title;
        this.content = content;
    }
    
    void addLike(User user){
        likes ~= user;
    }

    void addComment(User user, string comment){
        comments ~= [user.name, comment];
    }

    void displayInfo(){
        displayPost();
        displayLikes();
        displayComments;
    }

    void displayPost(){
        writefln("\n----- %s ----- by '%s'\n%s", title, author.name ,  content);
    }

    void displayLikes(){
        writefln("\nLikes for '%s': ", title);
        foreach(liker; likes){
            writeln(liker.name);
        }
    }

    void displayComments(){
        writefln("\nComments on '%s':", title);
        foreach(commentPair ; comments){
            writefln("%s: %s", commentPair[0], commentPair[1]);
        }
    }
}

