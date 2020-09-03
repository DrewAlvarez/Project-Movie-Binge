var movieList = ["0111161", "0068646", "0468569", "0071562", "0167260", "0110912", "0108052", "0050083", "1375666", "0137523", "0120737", "0109830", "0060196", "8503618", "0167261", "0133093", "0099685", "0080684", "0073486", "0056058", "6751668", "0816692", "0317248", "0245429", "0120815", "0120689", "0118799", "0114369", "0102926", "0076759", "0047478", "0038650", "7286456", "2582802", "1675434", "0482571", "0407887", "0253474", "0172495", "0120586", "0114814", "0110413", "0110357", "0103064", "0095765", "0095327", "0088763", "0066763", "0064116", "0054215"]
var showList = ["5491994", "0795176", "0185906", "0903747", "7366338", "0306414", "6769208", "9253866", "2395695", "0081846", "0944947", "0417299", "2861424", "0141842", "8420184", "0071075", "1533395", "1355642", "1877514", "1475582", "0052520", "0111893", "1806234", "7920978", "0296310", "0103359", "2092588", "0303461", "0092337", "2356777", "0098769", "0877057", "1508238", "2802850", "0213338", "2571774", "7137906", "3530232", "4742876", "2098220", "0081912", "0386676", "0108778", "0081834", "0268093", "1865718", "0063929", "0098904", "0112130", "1832668"]
var movieDiv = $("<div>")
var randomArr = []

// Generates a random number
for (var i = 0; i < 10; i++) {
    var added = false;
    do {
        added = false;
        var randomNum = Math.floor(Math.random() * 50);
        if (randomArr.indexOf(randomNum) === -1) {
            randomArr.push(randomNum);
            added = true;
            console.log(randomNum)
        }
    } while (!added)
}

// Grabs Random Movie Posters
for (var i = 0; i < 10; i++) {
    var moviePoster = movieList[randomArr[i]]
    console.log(moviePoster)
    posterFunc(moviePoster, i)
}


for (var i = 0; i < 10; i++) {
    var showPoster = showList[randomArr[i]]
    posterFuncTwo(showPoster, i)
}

//Random movie API
function posterFunc(moviePoster, index) {
    var omdbUrl = "https://www.omdbapi.com/?i=tt" + moviePoster + "&apikey=c2cf349a";

    $.ajax({
        url: omdbUrl,
        method: "GET",

    }).then(function (response) {
        console.log(response)

        imgSrc = response.Poster
        var randomMovies = $("<img>").attr("src", imgSrc).addClass('posterSize');
        $($(".gallery-cell").get(index)).append(randomMovies);

        //Function to activate Modal
        randomMovies.on("click", function () {
            $(".modal-card-title").text(response.Title);
            $(".plot").text(response.Plot);
            $(".actors").text(response.Actors)
            $(".rated").text(response.Rated)
            $(".modal").addClass("is-active");
        })

        //Modal Button functions        
        $(".delete").click(function () {
            $(".modal").removeClass("is-active");
        })
        $(".delete").click(function () {
            $(".modal").removeClass("is-active");
        })

    });


};

function posterFuncTwo(showPoster, index){
  var omdbUrl = "https://www.omdbapi.com/?i=tt" + showPoster + "&apikey=c2cf349a";

  $.ajax({
    url: omdbUrl,
    method: "GET",

  }).then(function(response) {
    console.log(response)

    imgSrc = response.Poster
    var randomMovies = $("<img>").attr("src", imgSrc).addClass('posterSize');
    //$("#movie-scroll").append(randomMovies)
    $($(".tv-cell").get(index)).append(randomMovies);

    randomMovies.on("click", function(){
      $(".modal-card-title").text(response.Title);
      $(".plot").text(response.Plot);
      $(".actors").text(response.Actors)
      $(".rated").text(response.Rated)
      $(".modal").addClass("is-active");
    })
    
    $(".delete").click(function(){
      $(".modal").removeClass("is-active");
    })
    $(".cancelBtn").click(function(){
      $(".modal").removeClass("is-active");
    })
          
  });

}
