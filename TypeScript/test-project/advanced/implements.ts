interface Alarm {
    alertCount: number;
    alert(): void;
}

interface Info{
    info(): void;
}

class Door implements Info {
    public width: number;
    public height: number;
    public className: string = "Door";

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    info(): void{
        console.log(`\nClass Name: ${this.className}`);
        console.log(`Width: ${this.width}\nHeight: ${this.height}`);
        console.log('-----------------');
    }
}


class SecurityDoor extends Door implements Alarm, Info{
    public alertCount: number = 0;
    public className = "SecurityDoor";

    alert(): void {
        this.alertCount += 1;
        console.log(`${this.className} alert: ${this.alertCount}`);
    }
}

class Car implements Alarm, Info {
    public alertCount: number = 0;
    public name: string;
    public className = "Car";

    constructor(name: string){
        this.name = name;
    }

    info(): void{
        console.log(`\nClass Name: ${this.className}`);
        console.log('-----------------');
    }

    alert(): void {
        this.alertCount += 1;
        console.log(`${this.className} alert: ${this.alertCount}`);
    }
}


let door = new Door(100, 200);
let securityDoor = new SecurityDoor(200, 200);
let car = new Car("car1");

door.info();
securityDoor.info();
securityDoor.alert();
securityDoor.alert();
securityDoor.alert();


car.info();
car.alert();
car.alert();
car.alert();











