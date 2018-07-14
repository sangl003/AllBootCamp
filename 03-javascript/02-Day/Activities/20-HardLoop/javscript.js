var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

for(var i=0; i< myFarm.length;i++)
{
  var animal = myFarm[i];
  console.log(animal);
  
 // if(animal[0]=== 'c' || animal[0]==='o') or
 if(animal.startsWith("c")|| animal.startsWith("o"))
    {
        alert(`${animal.charAt(0).toUpperCase()}${animal.slice(1)} starts with "c" or "o"!`);
  }

}
