
module pattern.observer.user;

import pattern.observer.post;
import pattern.observer.notification_system;
import std.stdio;

interface Observer {
    void update(string posterName, Post post);
}


class User : Observer{
    string name;
    User[] followers;
    Post[] posts;
    NotificationSystem notifications;

    this(string name){
        this.name = name;
        this.notifications = new NotificationSystem();
    }

    void follow(User user){
        writefln("%s started following '%s'", name, user.name);
        user.addFollower(this);
    }

    void addFollower(User follower){
        followers ~= follower;
    }


    void notifyFollowers(Post post){
        foreach(follower ; followers){
            follower.update(this.name, post);
        }
    }

    void createPost(Post post){
        writefln("%s created a post: '%s'", name, post.title);
        post.author = this;
        posts ~= post;
        notifyFollowers(post);
    }

    void likePost(Post post){
        writefln("%s liked '%s'", name, post.title);
        post.addLike(this);
        notifications.add("You liked " ~ post.title);
    }

    void commentPost(Post post, string comment){
        writefln("%s commented on '%s'", name, post.title);
        post.addComment(this, comment);
        notifications.add("You commented on " ~ post.title);
    }

    Post getOldestPost(){
        return posts[0];     
    }

    Post getLatestPost(){
        return posts[posts.length - 1];
    }

    void displayPosts(){
        writefln("\n%s's posts: ", name);
        foreach(post ; posts){
            post.displayInfo();
        }
        
    }

    override void update(string posterName, Post post){
        writefln("%s received %s posted: '%s'",name, posterName, post.title);
        notifications.add(posterName ~ " posted: " ~ post.title);
    }

    void displayNotifications(){
        writefln("\n%s's notifications: ", name);
        notifications.display();
    }

}

