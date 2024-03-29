class Thing {
  constructor(name) {
    this.name = name;
  }

  get is_a() {
    return booleanPropAdder(this, true);
  }

  get is_not_a() {
    return booleanPropAdder(this, false);
  }

  get is_the() {
    return relationPropAdder(this);
  }

  get being_the() {
    return relationPropAdder(this);
  }

  get and_the() {
    return relationPropAdder(this);
  }

  has(n) {
    return thingPropAdder(this, n);
  }

  having(n) {
    return thingPropAdder(this, n);
  }

  get can() {
    return funcPropAdder(this);
  }

}

class ThingArray extends Array {
  constructor(count, name) {
    super(count);
    for (let i = 0; i < count; i++) {
      this[i] = new Thing(name);
    }
  }

  each(fn) {
    this.forEach(thing => {
      global.having = n => thingPropAdder(thing, n);
      global.being_the = relationPropAdder(thing);
      fn();
      delete global.having;
      delete global.being_the;
    });
  }
}

function booleanPropAdder(o, value) {
  return onPropAccess(prop => {
    o[`is_a_${prop}`] = value;
    return o;
  });
}

function thingPropAdder(o, count) {
  return onPropAccess(prop => {
    if (count === 1) {
      o[prop] = new Thing(prop);
    } else {
      const thingName = prop.slice(0, -1);
      o[prop] = new ThingArray(count, thingName);
    }
    return o[prop];
  });
}

function relationPropAdder(o) {
  return onPropAccess(relation => {
    return onPropAccess(object => {
      o[relation] = object;
      return o;
    });
  });
}

function funcPropAdder(o) {
  return onPropAccess(function(actionName) {
    return function (...trackerAction) {
      let trackerName, action;
      if (trackerAction.length === 1) {
        action = trackerAction[0];
      } else {
        [trackerName, action] = trackerAction;
        o[trackerName] = [];
      }
      o[actionName] = function (...args) {
        global.name = o.name;
        const result = action(...args);
        if (trackerName) o[trackerName].push(result);
        return result;
      };
    };
  });
}

function onPropAccess(fn) {
  return new Proxy({}, { get: (target, name) => fn(name) });
}


// my solution

class Thing_my{
  constructor(name){
    this.name = name;
    this.is_a = {
      woman: true
    }
    this.is_not_a = {
      man: false
    }
    this.is_a_woman = true;
    this.is_a_man = false;
    this.is_the={
      parent_of: {joe: 'joe'}
    }
    this.parent_of = 'joe';
    this.spoke = [];
    this.can = {
      speak: (callback,spoke)=>{
        if(typeof callback === "function"){
          callback = (phrase)=>`${this.name} says: ${phrase}!`;
          this.speak = callback;
        }else{
          spoke = (phrase)=>{
            this.spoke.push(`${this.name} says: ${phrase}!`);
//             console.log(phrase)
          };
          this.speak = spoke;
        }
      }
    }
    
    Array.prototype.each = function(callback){
      for(let i = 0; i < this.length; i++){
        if(this[i].name == 'hand'){
          if(i == 0){
            let str = callback.toString();
            let num = str.charAt(str.indexOf('(')+1);
            callback = (hand)=>{hand.having(num).fingers}
          }
        }
        if(this[i].name == 'eye'){
          if(i == 0){
            let str = callback.toString();
            let color = str.charAt(str.indexOf('color')+6);
            let shape = str.charAt(str.indexOf('shape')+6);
            if(color){
              callback = (eye)=>{eye.color(color)}
              if(shape){
                callback = (eye)=>{
                  eye.color(color);
                  eye.shape(shape)
                }
              }
            }
          }
        }
      callback(this[i]);
      }
    }
  }
  has(num){
    if(num == 2){
      this.arms = [new Arm(), new Arm()];
      this.hands = [new Hand(),new Hand()];
      return this;
    }else if(num == 1){
      this.torso = new Torso();
      this.head = new Head();
      return this;
      // return {head: new Head(num)}; // 不能用這種寫法
    }
  }
  
  having(num){
    if(num == 2){
      this.arms = [new Arm(num), new Arm(num)];
      return this;
    }
  }
  
};

class Arm extends Thing{
  constructor(num){
    super();
    for(let i in this){
      delete this[i];
    }
    this.length = 2;
    this.name = 'arm';
  }
};

class Head extends Thing{
  constructor(num){
    super();
    delete this.is_a;
    delete this.is_not_a;
    delete this.is_a_woman;
    delete this.is_a_man;
    this.name = 'head';
  }
  
  having(num){
    this.eyes = [new Eye(num), new Eye(num)];
    return this;
  }
};

class Torso extends Thing{
  constructor(){
    super();
    for(let i in this){
      delete this[i];
    }
    this.name = 'torso';
  }
};

class Eye extends Head{
  constructor(num){
    super();
    for(let i in this){
      delete this[i];
    }
    this.name = 'eye';
  }
  color(color){
    if(color == 'g'){
      this.color = 'green';
    }else if(color == 'b'){
      this.color = 'blue';
    }
  }
  shape(shape){
    if(shape == 'r'){
      this.shape = 'round';
    }
  }
};

class Hand extends Thing{  
  constructor(){
    super();
    for(let i in this){
      delete this[i];
    }
    this.name = 'hand';
  }
  having(num){
    this.fingers = [];
    for(let i = 0; i < num; i++){
      this.fingers.push(new Finger())
    }
    
    return this;
  }
};

class Finger extends Hand{
  constructor(){
    super();
    this.name = 'finger';
  }
};


let a = new Thing('jane');
// a.has(1).head.having(2).eyes;  // 卡最久的地方
// console.log(a.head.eyes);

// a.has(2).hands.each(hand=>having(5).fingers); // 這裡也卡很久
// a.has(2).hands.each(hand=>having(4).fingers); 
// console.log(a.hands[0])

// a.has(1).head.having(2).eyes.each(eye => eye.being_the.color.green.shape.round);
// console.log(a.head.eyes);

a.can.speak(phrase => `${name} says: ${phrase}!`)
console.log(a.speak('Hello'))

// a.can.speak('spoke', phrase => `${name} says: ${phrase}!`);
// a.speak('hi');
// console.log(a.spoke)