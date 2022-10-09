class Warrior{
    constructor(){
      this.ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
      this.experiences = 0;
      this.achievement = [];
    }
    level(){
      return Math.floor(this.experiences / 100)+1;
    }
    rank(){
      let level = this.level();
      return this.ranks[Math.floor(level/10)];
    }
    achievements(){
      return this.achievement;
    }
    training(train){
      if(this.level()>=train[2]){
        this.achievement.push(train[0]);
        this.experiences += train[1];
        this.experiences = this.experiences >= 9900? 9900: this.experiences;
        return train[0];
      }else {
        return 'Not strong enough';
      }
    }
    battle(n){
      let diff = n-this.level();
      if(n == 0 || n>100 || n < 0) return 'Invalid level';
      if(n == this.level()){
        this.experiences += 10;
        this.experiences = this.experiences >= 9900? 9900: this.experiences;
        return 'A good fight';
      }else if(n > this.level()){
        if(diff >= 5 && Math.floor(n/10) > Math.floor(this.level()/10)) return "You've been defeated";
        this.experiences += 20 * diff * diff;
        this.experiences = this.experiences >= 9900? 9900: this.experiences;
        return 'An intense fight';
      }else{
        if(diff == -1){
          this.experiences += 5;
          this.experiences = this.experiences >= 9900? 9900: this.experiences;
          return 'A good fight';
        }else{
          return 'Easy fight';
        }
      }
    }
    experience(){
      return this.experiences+100;
    }
  };
  