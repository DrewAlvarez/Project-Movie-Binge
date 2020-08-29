var movieList = ["Back to the Future", "Jumanji", "Jurassic Park", "Underworld", "The Princess Bride", "City Slickers", "Smokey and the Bandit", "Tropic Thunder", "Dumb and Dumber", "Excalibur"]
var movieDiv = $("<div>")


for (var i = 0; i < 10; i++) {
  var randomId = Math.floor(Math.random() * 6534893)
  var moviePoster = "0000000" + randomId;

  posterFunc(moviePoster.substr(moviePoster.length - 7))
}

function posterFunc(moviePoster) {
  var omdbUrl = "https://www.omdbapi.com/?i=tt" + moviePoster + "&apikey=f52998b5";

  $.ajax({
    url: omdbUrl,
    method: "GET",

  }).then(function (response) {
    console.log(response)

    if (response.Response === "True" && response.Type === "movie" && response.Poster !== "N/A") {
      console.log(response);
      imgSrc = response.Poster
      var randomMovies = $("<img>").attr("src", imgSrc);
      $("#movie-scroll").append(randomMovies)
    }
  });
}