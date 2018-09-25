// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
<<<<<<< HEAD
=======

var inquirer = require("inquirer");

inquirer.prompt([
   //    - Basic input,
   {
       type: "input",
       message: "What is you favorite animal?",
       name: "animalname"
   },
   {
       type: "confirm",
       message: "Are you sure?",
       name:"confirm",
       default:true
   },
//    - Password,
{
    type: "password",
    message: "Enter your password",
    name: "password",
    default:true
  },
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm"
    },
//    - List,
{
    type: "list",
    message: "Pick an Animal from the list?",
    choices: ["Monkey", "Dragon", "Dog"],
    name: "animal"
  },
  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true
  }
//    - Checkbox,

//    - and Confirm
])
.then(function(inquirerRresponse){

    if(inquirerRresponse.password === "abc123"){
        console.log("Your favorite animal is : " + inquirerRresponse.animalname);
        console.log("But now you think your favorite animal is : " + inquirerRresponse.animal);

    }

    else{
        console.log("You have entered wrong password to enter the forest  : " + inquirerRresponse.password);
    }

}
);
>>>>>>> cdb2e4356b8118ee9fed7b3d02f6fab0dbd562ab
