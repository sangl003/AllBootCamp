var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Webcrazy@umn1",
  database: "tops_songs"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  runSearch();
  
});

function runSearch(){
  inquirer
  .prompt({
    name :"action",
    type: "list",
    message: "what woudl you like to do?",
    choices:[
      "find all artists who appear more than once",
      "find songs by artist",
      "find data within a specific range",
      "search for a specific song"
    ]

}).then(function(answer) { 
  switch(answer.action){
  case "find songs by artist":
  artist_search();
  break;

  case "find all artists who appear more than once":
  multi_search();
  break;

  case "find data within a specific range":
  range_search();
  break;

  case "search for a specific song":
  song_search();
  break;
  }

});
}


function artist_search() {
  inquirer
    .prompt({
      name: "artist_name",
      type: "input",
      message: "Which artist would you like to lookup?",
     
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      var query = "select rank_id, song_name from tops_songs where?";
      var artist_data = connection.query(query,{artist_name: answer.artist_name},function(err,res){
        for(var i =0; i < res.length;   i++){
          console.log("id" + res.rank_id + "|| Songs" + res[i].song_name);
        }
        runSearch();
      });

      console.log(artist_data.sql);
    });
}

function multi_search() {
  var query = "select artist_name from tops_songs group By artist_name having count(*) > 1?";
  var multi_data = connection.query(query,function(err,res){
  for(var i =0; i < res.length; i++){
    console.log("artist" + res.artist_name);
  }
  runSearch();
});

console.log( multi_data.sql);
}


