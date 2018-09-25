function Animal(noise){
    this.noise = noise;
    this.raining = false;

    this.makeNoise = function(){
        if(this.raining){
            console.log(this.noise);
        }
    }

}


const dogs  = new Animal("woof");
const cats = new Animal("meow");

dogs.raining = true;
cats.raining = false;

dogs.makeNoise();
cats.makeNoise();


// const dog=  {
//     raining: true,
//     noise: "Woof",
//     makeNoise:function(){
//         if (this.raining){
//             console.log(this.noise);
//         }
//     } 
    
// }

// const cats = {
//     raining: false,
//     noise: "Meow",
//     makeNoise: function(){
//         if (this.raining){
//             console.log(this.noise);
//         }
//     }
// }

// dog.makeNoise();
// cats.makeNoise();

// cats.raining =true;

// const massHysteria = (catsObject, dogObject)=>{
//     if (catsObject.raining && dogObject.raining){

//     }

// }