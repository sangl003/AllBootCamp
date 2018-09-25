// Creating a constructor 
//  Using property instead of long list of variables to pass in the constructor 
//function character (props)
// {
//     this.name = props.name;
//     this.age = props.age;
// }

// const xena = new Character({
//     name: "xena";
//     age: 20;
// })

function Profile(name,profession,gender,age,strength,HitPoints){   

    this.name = String(name);
    this.profession = String(profession);
    this.gender = gender;
    this.age = age;
    this.strength= strength;
    this.HitPoints = HitPoints;
    this.PrintStats = function(){
        console.log("Name : " + this.name );
        console.log("Profession : " + this.profession );
        console.log("Gender : " + this.gender );
        console.log("age : " + this.age );
        console.log("Strength : " + this.strength );
        console.log("HitPoints : " + this.HitPoints );
    };

    this.IsAlive = function(){
        if (this.HitPoints > 0){
            console.log("Character is Alive " + this.HitPoints);
            return true;
        }

        else{
            console.log("Character is Dead " + this.HitPoints);
            return false;
        }
    };

    this.Attack = function(x){
        x.HitPoints -= this.strength;
        // const newStrength = this.strength - this.HitPoints;
        console.log("Character is being attacked " + x.HitPoints);
    };

    this.LevelUp = function(){
        this.age ++;
        this.strength += 5;
        this.HitPoints += 25;

        console.log("You have Leveled up!!");
        console.log("Your new Stats are: \nAge= "+ this.age + "\nStrength " + this.strength + "\nHit Points " + this.HitPoints);

    }
}


// creating Character from the constructor 
// sets the variables objects and initializes them

var SuperMan = new Profile ("SuperMan","Saving people","Man",35, 400,10);
var SuperWomen = new Profile ("SuperWomen","Saving people","Female",28, 600,30);


// calling the print methods
console.log("\n\r\n");
SuperMan.PrintStats();

console.log("\n\r\n");

console.log("---------------------**************************-----------------------------");
console.log("\n\r\n");
SuperWomen.PrintStats();
console.log("\n\r\n");
console.log("---------------------**************************-----------------------------");
SuperMan.IsAlive();
console.log("\n\r\n");
console.log("---------------------**************************-----------------------------");
SuperMan.Attack(SuperWomen);
console.log("\n\r\n");
console.log("---------------------**************************-----------------------------");
SuperMan.LevelUp();
console.log("\n\r\n");