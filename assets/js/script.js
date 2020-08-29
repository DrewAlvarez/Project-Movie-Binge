var movieList = ["Back to the Future", "Jumanji", "Jurassic Park", "Underworld", "The Princess Bride", "City Slickers", "Smokey and the Bandit", "Tropic Thunder", "Dumb and Dumber", "Excalibur"]
var movieDiv = $("<div>")
for(i=0; i < movieList.length; i++){
  moviePoster = movieList[i];
  posterFunc(moviePoster)
      
}

function posterFunc(moviePoster){

  var omdbUrl = "https://www.omdbapi.com/?t=" + moviePoster + "&apikey=trilogy";

  $.ajax({
      url: omdbUrl,
      method: "GET",

  }).then(function(response) {
      console.log(response);
      
      var randomMovies = $("<img>")
      imgSrc = response.Poster
      $("img").attr("src", imgSrc);
      $("img").attr("data-movie", i)
      movieDiv.append(randomMovies)
      $("body").append(movieDiv)
  });
}