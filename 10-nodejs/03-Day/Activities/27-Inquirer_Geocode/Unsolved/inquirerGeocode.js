// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "qpXW2sEKuY3Sq2mEgGNQnmTcwDwFR4eP"
};

var geocoder = NodeGeocoder(options);

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address
//var address = process.argv.slice(2).join(" ");

var inquirer = require("inquirer");


var address = [
  {
    type:"input",
    message: "Enter address to geocode",
    name: "address"
  },

  {
    type: "confirm",
    message:"Are you sure ?",
    name:"confirm",
    default:true
  }
];

inquirer.prompt(address).then(function(response){
  if (response.confirm === true){
  geocoder.geocode(response.address, function(err, data) {
    console.log(JSON.stringify(data, null, 2));
  })
}
else{
  console.log("Come back later");
}
});

