var movieList = ["Back to the Future", "Jumanji", "Jurassic Park", "Underworld", "The Princess Bride", "City Slickers", "Smokey and the Bandit", "Tropic Thunder", "Dumb and Dumber", "Excalibur"]
var movieDiv = $("<div>")

for(i=0; i <movieList.length; i++){
  moviePoster = movieList[i]

  posterFunc(moviePoster)
}

function posterFunc(moviePoster){

  var omdbUrl = "https://www.omdbapi.com/?t=" + moviePoster + "&apikey=f52998b5";

  $.ajax({
      url: omdbUrl,
      method: "GET",

  }).then(function(response) {
      console.log(response.Poster);
      imgSrc = response.Poster
      var randomMovies = $("<img>").attr("src", imgSrc);
      movieDiv.append(randomMovies)
      $("body").append(movieDiv)
  });
}