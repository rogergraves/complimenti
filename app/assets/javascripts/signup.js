$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    });

    var makeButtonVisible = function() {
        if($("#event_type").val() && $('#number_of_donors').val()) {
            $('#button_2').show();
            if($("#email").val()) {
                $('#button_3').show();
            }
        }
    }

    $( "#event_type" ).autocomplete({ source: [ "Wedding", "Bar Mitzvah", "Graduation", "Birthday" ]
        , minLength: 0, change: makeButtonVisible, select: makeButtonVisible }).focus(function () {
        $(this).autocomplete("search");
    });

    $("#number_of_donors").change(makeButtonVisible);
    $("#number_of_donors").keyup(makeButtonVisible);
    $("#email").keyup(makeButtonVisible);

    $("#button_1").click(function() {
        $("#carousel-inner").removeClass("red-border")
        $("#carousel-inner").addClass("green-border")
    });
    $("#button_2").click(function() {
        $("#carousel-inner").removeClass("green-border")
        $("#carousel-inner").addClass("red-border")
    });
    $("#button_3").click(function() {
        $('.carousel').carousel('next');
        $("#carousel-inner").removeClass("red-border")
        $("#carousel-inner").addClass("green-border")
    });

});