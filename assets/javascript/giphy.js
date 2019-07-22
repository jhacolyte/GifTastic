var shows = ["Supernatural", "The Blacklist", "Stranger Things", "Big Bang Theory", "Game of Thrones", "Breaking Bad", "the 100", "Lucifer"];


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