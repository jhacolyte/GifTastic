var shows = ["Supernatural", "West World", "The Blacklist", "Stranger Things", "Big Bang Theory", "Game of Thrones", "Breaking Bad", "the 100", "Lucifer", "The Walking Dead", "Sherlock"];


function makeButtons() {

    $('#buttonsView').empty();

    for (var i = 0; i < shows.length; i++) {

        var a = $('<button>')
        a.addClass('show');
        a.attr('data-name', shows[i]);
        a.text(shows[i]);
        $('#buttonsView').append(a);
    }
}

$("#addShow").on("click", function() {


    var show = $("#show-input").val().trim();

    shows.push(show);

    makeButtons();

    return false;
})

function displayGifs() {
    var show = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&limit=9&api_key=dc6zaTOxFJmzC";


    $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
        console.log(response.data);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $('<div class=gifs>');
            var showGif = $('<img>');
            showGif.attr('src', results[i].images.fixed_height_still.url);

            showGif.attr('title', "Rating: " + results[i].rating);
            showGif.attr('data-still', results[i].images.fixed_height_still.url);
            showGif.attr('data-state', 'still');
            showGif.addClass('gif');
            showGif.attr('data-animate', results[i].images.fixed_height.url);
            // var rating = results[i].rating;
            // var p = $('<p>').text('Rating: ' + rating);
            gifDiv.append(showGif)
                // gifDiv.append(p)

            $("#gifsView").prepend(gifDiv);
        }

    });



    $(document).on('click', '.gif', function() {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        };
    });


    $(document).on("click", ".show", displayGifs);


    makeButtons();