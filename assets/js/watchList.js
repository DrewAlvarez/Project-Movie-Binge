var watchListArr = JSON.parse(localStorage.getItem("ID"))

$(document).ready(function(){
    for( var i = 0; i < watchListArr.length; i++){
        watchListFunc(watchListArr[i])
    }

    function watchListFunc(watchListArr) {
        var omdbUrl = "https://www.omdbapi.com/?i=" + watchListArr + "&apikey=c2cf349a";
  
        $.ajax({
            url: omdbUrl,
            method: "GET",
  
        }).then(function (response) {
            
            var cardEl = $("<div>").addClass("card is-full-mobile is-half-tablet is-one-third-widescreen is-one-third-widescreen is-one-quarter-fullhd");
            var cardImgEl = $("<div>").addClass("card-image")
            var figureEl = $("<div>").addClass("image is-4by3")
            var imgEl = $("<img>")
            var cardContentEl = $("<div>").addClass("card-content")
            var mediaEl = $("<div>").addClass("media")
            var mediaContentEl = $("<div>").addClass("media-content")
            var titleEl = $("<p>").addClass("title is-4")
            imgEl.attr("src", response.Poster)
            titleEl.text(response.Title)
            
            figureEl.append(imgEl)
            cardImgEl.append(figureEl)
            cardEl.append(cardImgEl)
    
            mediaContentEl.append(titleEl)
            mediaEl.append(mediaContentEl)
            cardContentEl.append(mediaEl)
            cardEl.append(cardContentEl)

            $(".is-desktop").append(cardEl)  
        });
    };
})
