var movieList = ["0111161", "0068646", "0468569", "0071562", "0167260", "0110912", "0108052", "0050083", "1375666", "0137523", "0120737", "0109830", "0060196", "8503618", "167261", "0133093", "0099685", "0080684", "0073486", "0056058", "6751668", "0816692", "0317248", "0245429", "0120815", "0120689", "0118799", "0114369", "0102926", "0076759", "0047478", "0038650", "7286456", "2582802", "1675434", "0482571", "0407887", "0253474", "0172495", "0120586", "0114814", "0110413", "0110357", "0103064", "0095765", "0095327", "0088763", "0066763", "0064116", "0054215"]
var movieDiv = $("<div>")
var randomArr = []

<<<<<<< HEAD
for (var i = 0; i < movieList.length; i++) {
  var moviePoster = movieList[i]
  posterFunc(moviePoster)
}

// for(var i=0; i < 10; i++){
//   var randomId = Math.floor(Math.random()*6534893)
//   var moviePoster = "0000000" + randomId;

//   posterFunc(moviePoster.substr(moviePoster.length-7))
// }

function posterFunc(moviePoster) {
  var omdbUrl = "https://www.omdbapi.com/?t=" + moviePoster + "&apikey=c2cf349a";
=======
for(var i = 0; i < 10; i++){
  var added = false;
  do{
    added = false;
    var randomNum = Math.floor(Math.random()*50);
    if(randomArr.indexOf(randomNum) === -1){
      randomArr.push(randomNum);
      added = true;
      console.log(randomNum)
    }
  }while(!added)
}

for(var i=0; i < 10; i++){
  var moviePoster = movieList[randomArr[i]]
  console.log(moviePoster)  
  
  posterFunc(moviePoster, i)
}

function posterFunc(moviePoster, index){
  var omdbUrl = "https://www.omdbapi.com/?i=tt" + moviePoster + "&apikey=c2cf349a";
>>>>>>> master

  $.ajax({
    url: omdbUrl,
    method: "GET",
<<<<<<< HEAD

  }).then(function (response) {
    console.log(response)

    if (response.Response === "True" && response.Type === "movie" && response.Poster !== "N/A") {
      console.log(response);
      imgSrc = response.Poster
      var randomMovies = $("<img>").attr("src", imgSrc);
      $("#movie-scroll").append(randomMovies)
    }
=======

  }).then(function(response) {
    console.log(response)

    imgSrc = response.Poster
    var randomMovies = $("<img>").attr("src", imgSrc).addClass('posterSize');
    //$("#movie-scroll").append(randomMovies)
    $($(".gallery-cell").get(index)).append(randomMovies);

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
          
>>>>>>> master
  });

};

