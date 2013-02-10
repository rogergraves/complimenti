$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    });

    var makeButtonVisible = function() {
        if($("#event_type").val() && $('#number_of_donors').val()) {
            $('#button_2').show();
        }
    }

    $( "#event_type" ).autocomplete({ source: [ "Wedding", "Bar Mitzvah", "Graduation", "Birthday" ]
        , minLength: 0, change: makeButtonVisible, select: makeButtonVisible }).focus(function () {
        $(this).autocomplete("search");
    });

    $("#number_of_donors").change(makeButtonVisible);
    $("#number_of_donors").keyup(makeButtonVisible);

});