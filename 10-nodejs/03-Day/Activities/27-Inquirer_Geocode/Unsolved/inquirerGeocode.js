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
<<<<<<< HEAD
  apiKey: "YOUR-MAPQUEST-API-CONSUMER-KEY"
=======
  apiKey: "qpXW2sEKuY3Sq2mEgGNQnmTcwDwFR4eP"
>>>>>>> cdb2e4356b8118ee9fed7b3d02f6fab0dbd562ab
};

var geocoder = NodeGeocoder(options);

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address
<<<<<<< HEAD
var address = process.argv.slice(2).join(" ");

// Then use the Google Geocoder to geocode the address
geocoder.geocode(address, function(err, data) {

  // Then console log the result and stringify it.
  // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(data, null, 2));
=======
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
>>>>>>> cdb2e4356b8118ee9fed7b3d02f6fab0dbd562ab
});

