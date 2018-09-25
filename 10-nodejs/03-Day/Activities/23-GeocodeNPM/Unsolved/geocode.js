// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

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

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);

<<<<<<< HEAD


// Take in the command line arguments

=======
// Take in the command line arguments
// const street = process.argv[2];
// const city = process.argv[3];
// const state = process.argv[4];
>>>>>>> cdb2e4356b8118ee9fed7b3d02f6fab0dbd562ab


// Build your address as an array or string


<<<<<<< HEAD

// Then use the geocoder object to search the address
=======
origin = process.argv.slice(2).join(",");
console.log(origin);

// Then use the geocoder object to search the address

geocoder.geocode(origin, function(err, res) {
    console.log(JSON.stringify(res, null, 2));
  
});
>>>>>>> cdb2e4356b8118ee9fed7b3d02f6fab0dbd562ab
