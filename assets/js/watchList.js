var watchListArr = JSON.parse(localStorage.getItem("ID"))
$(document).ready(function () {
    for (var i = 0; i < watchListArr.length; i++) {
        watchListFunc(watchListArr[i])
    }

    function watchListFunc(watchListArr) {
        var omdbUrl = "https://www.omdbapi.com/?i=" + watchListArr + "&apikey=c2cf349a";

        $.ajax({
            url: omdbUrl,
            method: "GET",

        }).then(function (response) {

            var cardEl = $("<div>").addClass("card is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd");
            var cardImgEl = $("<div>").addClass("card-image")
            // var figureEl = $("<div>").addClass("image")
            var imgEl = $("<img>")
            var cardContentEl = $("<div>").addClass("card-content")
            // var mediaEl = $("<div>").addClass("media")
            // var mediaContentEl = $("<div>").addClass("media-content")
            var titleEl = $("<p>").addClass("title")
            var buttonEl = $("<button>").addClass("button rmvButton").text("Remove from List")
            imgEl.attr("src", response.Poster)
            titleEl.text(response.Title)

            // figureEl.append(imgEl)
            cardImgEl.append(imgEl)
            cardEl.append(cardImgEl)

            cardContentEl.append(titleEl)
            // mediaEl.append(mediaContentEl)
            // cardContentEl.append(mediaEl)
            cardEl.append(cardContentEl)

            cardContentEl.append(buttonEl)

            $(".saved-movies").append(cardEl)

            buttonEl.click(function () {
                var watchList = JSON.parse(localStorage.getItem("ID"))
                var movieId = response.imdbID
                var updatedList = watchList.filter(function (item) {
                    return item !== movieId
                })
                localStorage.setItem("ID", JSON.stringify(updatedList))
                cardEl.remove()

            })
        });
    };
})
