interface Vehicle {
    
	wheel: number;
	fuel: string;
    color: string;

    setWheel( wheel: number ): void;
    setFuel( fuel: string ): void;
    setColor( color:string ): void;
    getFuel(): string;
    getWheel( ): number;
    getColor(): string;
    
}

class Car implements Vehicle {
	wheel: number;
	fuel: string;
    color: string;

    constructor(){};
    
    setWheel( wheel: number ): void{
        this.wheel = wheel;
    }

    setFuel( fuel: string ): void {
        this.fuel = fuel;
    }
    setColor( color:string ): void{
        this.color = color;
    }

    getFuel(): string{
		return this.fuel;
    }
    
    getWheel( ): number{
        return this.wheel;
    }

    getColor(): string {
        return this.color;
    }
}

class Motorcycle implements Vehicle {
    deluxe:boolean;
    
    wheel: number;
	fuel: string;
    color: string;
    
    setWheel( wheel: number ): void{
        this.wheel = wheel;
    }

    setFuel( fuel: string ): void {
        this.fuel = fuel;
    }
    setColor( color:string ): void{
        this.color = color;
    }

	constructor(deluxe: boolean){
		this.deluxe = deluxe;
	}


	getFuel(): string{
		return this.fuel;
    }
    
    getWheel( ): number{
        return this.wheel;
    }
    
    getColor(): string {
        return this.color;
    }
}

var car = new Car();
car.setWheel(20);
car.setColor("white");
var motorcycle = new Motorcycle(false);

console.log( car );
console.log( motorcycle );