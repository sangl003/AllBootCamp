// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBawJs2FWE7WYkcC56ORqH8MZxE9rOJZ_s",
    authDomain: "fir-demo02-b19ed.firebaseapp.com",
    databaseURL: "https://fir-demo02-b19ed.firebaseio.com",
    projectId: "fir-demo02-b19ed",
    storageBucket: "fir-demo02-b19ed.appspot.com",
    messagingSenderId: "65480321704"
  };
  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
// var database = ...
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.

database.ref().on("value",(snapshot)=>{
// If Firebase has a highPrice and highBidder stored (first case)
if(snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()){
        // Set the variables for highBidder/highPrice equal to the stored values in firebase.
        // highPrice = ...
        // highBidder = ...
        
        // highBidder = snapshot.child("highBidder").val();
        // highPrice = snapshot.child("highPrice").val();

        highBidder = snapshot.val().highBidder;
        highPrice = parseInt(snapshot.val().highPrice);

        $("#highest-bidder").text(snapshot.val().highBidder);
        $("#highest-price").text(snapshot.val().highPrice);

        console.log(snapshot.highBidder);
        console.log(snapshot.highPrice);

}
else{
        $("#highest-bidder").text(initialBidder);
        $("#highest-price").text(initialBid);

        console.log(initialBidder);
        console.log(initialBidder);
}
},(e) =>{
    console.log("Failed", e.code);
});


// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button

$("#submit-bid").on("click",(event) =>{
// prevent form from submitting with event.preventDefault() or returning false

// Get the input values
    event.preventDefault();
    var bidderName = $("#bidder-name").val().trim();
    var biderPrice = parseInt($("#bidder-price").val().trim());
  

// Log the Bidder and Price (Even if not the highest)

if (biderPrice > highPrice){
    alert("You are now the highest bidder");

    database.ref().set({
        highBidder : bidderName,
        highPrice: biderPrice
    })

// Save the new price in Firebase

$("#highest-bidder").text(bidderName);
$("#highest-price").text(biderPrice);

console.log(bidderName);
console.log(biderPrice);
// Log the new High Price

}

else {

    alert("Sorry you bid too low!!");
}

});





