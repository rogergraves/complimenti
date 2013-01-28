$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    })

    $( "#event_type" ).autocomplete({ source: [ "Wedding", "Bar Mitzvah", "Graduation", "Birthday" ]
        , minLength: 0 }).focus(function () {
        $(this).autocomplete("search");
    });

    var activateSecondSlide = function() {
       if($('#respondent_event').val() && $('#respondent_number_of_donors').val()) {
            $('.carousel-control.right').show();
       }
    }

    var submitFinalSlide = function() {
        $('.carousel-control.right').show();
    }

    // First slide listeners
    $('#respondent_number_of_donors').change(activateSecondSlide);
    $('#respondent_event').change(activateSecondSlide);
    $('#respondent_number_of_donors').keypress(activateSecondSlide);
    $('#respondent_event').keypress(activateSecondSlide);

    // Second slide listeners
    $('#respondent_email').keypress(submitFinalSlide);


    $('.carousel-control.right').click(function() {
        $('.carousel-control.right').hide();
    })

});