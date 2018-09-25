function DigitalPal(props){
    this.hungry = props.hungry;
    this. sleepy = props.sleepy;
    this.bored = props.bored;
    this. age = props.age;
    this.feed = function(){
        if (this.hungry){
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
            
        }

        else{
            console.log("No thanks! I'm full.");
        }

    };

    this.sleep = function(){
        if (this.sleepy){
            console.log("Zzzzzzzz");
            this.sleepy= false;
            this.bored = true;
            this.increaseAge();
            return false;
        }

        else{
            console.log("No way! I'm not tired.");
            return true;
        }
    };

  
    this.play = function(){
        if (this.bored){
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }

        else{
            console.log("Not right now. Later?");
        }

    };

    this.increaseAge = function(){
        this.age++;
        console.log("Happy Birthday to me! I am "+this.age+" old!");

        };

    
}

var dog = new DigitalPal({
                            hungry: true,
                            sleepy: true,
                            bored: false,
                            age: 10,
    
                });

    // defining new properties 
     dog.outside = false;
    // defining a new function bark 
    dog.bark = function(){
        console.log("Woof! Woof!");
    }

    dog.goOutside = function(){
        if(this.outside == false){
            console.log("Yay! I love the outdoors!");
            this.outside = true;
            this.bark();
        }

        else{
            console.log("We're already outside though...");
        }
    }


    dog.goInside = function(){
        if(this.outside){
            console.log("Do we have to? Fine...");
            this.outside = false;
            this.bark();
        }

        else{
            console.log("I'm already inside...");
        }
    }


    dog.feed();
    console.log("---------------------**************************-----------------------------");
    console.log("\n\r\n");
    dog.sleep();
    console.log("---------------------**************************-----------------------------");
    console.log("\n\r\n");
    dog.play();
    console.log("---------------------**************************-----------------------------");
    console.log("\n\r\n");
    dog.goOutside();
    console.log("---------------------**************************-----------------------------");
    console.log("\n\r\n");
    dog.goInside();
    console.log("---------------------**************************-----------------------------");
    console.log("\n\r\n");
   

var cat = new DigitalPal({
    hungry: true,
    sleepy: true,
    bored: false,
    age: 5,
})
cat.houseCondition = 100;
cat. meow = function(){
    console.log("Meow! Meow!....");
}

cat.destroyFurniture = function(){
    if(this.houseCondition >0 ){
    this.houseCondition-=10;
    this.bored = false;
    this.sleepy = true;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    }
   
}

cat.buyNewFurniture = function(){
    this.houseCondition += 50;
    console.log("Are you sure about that?");
}

cat.meow();

cat.play();
cat.feed();
cat.sleep();
console.log("---------------------**************************-----------------------------");
console.log("\n\r\n");
cat.destroyFurniture();
console.log("---------------------**************************-----------------------------");
console.log("\n\r\n");
cat.buyNewFurniture();
console.log("---------------------**************************-----------------------------");
console.log("\n\r\n");