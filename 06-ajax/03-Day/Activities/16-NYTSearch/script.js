
  var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

  // These variables will hold the results we get from the user's inputs via HTML
  var searchTerm = "Minneapolis";
  var numResults = 5;
  var startYear = 20100722;
  var endYear = 20180722;

  // queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
  // the user hits the search button
  

  var articleCounter = 0;
  
  $("#searchBtn").on("click", function(event) {
  event.preventDefault();

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=" + searchTerm +"&numberofarcticles" +numResults + "&begin_date="+ startYear + "&end_date=" + endYear;
  
 // var movie = $("#movie-input").val();

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
        console.log(response);
      $("#result").text(JSON.stringify(response));
    });     
      

  })

