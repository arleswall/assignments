class BoyBandMembers {
    constructor(name, hairStyle, hasTattoos, swagLevel) {
        this.name: name;
        this.hairStyles: = hairStyles;
        this.hasTattoos: hasTattoos;
        this.swagLevel: swagLevel;
    }
    
    sing(){
        console.log(`LALALA my name is ${this.name}`)
    }
}

const harry = new BoyBandMembers("Harry", "Long", true, 9);
harry.sing();