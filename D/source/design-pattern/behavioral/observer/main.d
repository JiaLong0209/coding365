
module pattern.observer.main;

import pattern.observer.post;
import pattern.observer.user;
import std.stdio;


void observer_main(){
    writeln("===== Observer Main =====");

    auto jialong = new User("Jialong0209");
    auto yabe = new User("Yabe");
    auto meri = new User("Meri");
    User[] users = [jialong, yabe, meri];

    jialong.follow(yabe);
    jialong.follow(meri);

    yabe.follow(jialong);

    meri.follow(yabe);

    jialong.createPost(new Post("What is Linux", "Linux is an awesome operating system!"));
    yabe.likePost(jialong.getLatestPost());
    meri.likePost(jialong.getLatestPost());
    meri.commentPost(jialong.getLatestPost(), "good");

    jialong.createPost(new Post("How to learn Japanese", "First, you must be a 日本人.\nSecond, you must live in Japan.\nFinally,　日本語が上手ですね〜〜!"));
    meri.likePost(jialong.getLatestPost());
    yabe.commentPost(jialong.getLatestPost(), "Japanese is so harddddd!!! :c");
    jialong.displayPosts();

    meri.createPost(new Post("如何成爲一道彩虹？", "去找名字中有‘彩虹’的人！"));

    yabe.createPost(new Post("I rigging my 2d model!!!", "I'm sooo happy :3 !!!"));
    jialong.likePost(jialong.getOldestPost());
    jialong.commentPost(jialong.getOldestPost(), "ほんそれ（笑");

    foreach(user ; users){
        user.displayPosts();
        user.displayNotifications();
    }
}
