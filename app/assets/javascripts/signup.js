$(document).ready(function() {
    $('.carousel').carousel({
        interval: false
    });

    var makeButtonVisible = function() {
        if($("#event_type").val() && $('#number_of_donors').val()) {
            $('#button_3').show();
            if($("#email").val()) {
                $('#button_4').show();
            }
        }
    }

    var makeButtonVisibleOfFocus = function() {
        if($("#event_type").val() && !$('#number_of_donors').val()) {
            $('#number_of_donors').focus();
        } else {
            makeButtonVisible();
        }
    }

    $( "#event_type" ).autocomplete({ source: [ "Wedding", "Bar Mitzvah", "Graduation", "Birthday" ]
        , minLength: 0, change: makeButtonVisible, select: function(event, ui) {
            if(!$('#number_of_donors').val()) {
                $('#number_of_donors').focus();
            } else {
                $('#button_4').show();
            }
        } }).focus(function () {
        $(this).autocomplete("search");
    });

    $("#number_of_donors").change(makeButtonVisible);
    $("#number_of_donors").keyup(makeButtonVisible);
    $("#email").keyup(makeButtonVisible);

    $("#button_1").click(function() {
        $("#carousel-inner").removeClass("red-border");
        $("#carousel-inner").addClass("green-border");
        growTree();
    });
    $("#button_2").click(function() {
        $('.carousel').carousel('next');
        $("#carousel-inner").removeClass("green-border");
        $("#carousel-inner").addClass("red-border");
    });
    $("#button_3").click(function() {
        $("#carousel-inner").removeClass("red-border");
        $("#carousel-inner").addClass("green-border");
        $("#email").focus();
    });
    $("#button_4").click(function() {
        $('.carousel').carousel('next');
        $("#carousel-inner").removeClass("red-border");
        $("#carousel-inner").addClass("green-border");
    });

    var skip_transitions = false;

    var swapImage = function(variations, timing) {
        timing = typeof timing !== 'undefined' ? timing : 4000;

        var variation = variations.pop();

        var image = $('.tree');

        setTimeout(function() {
            image.fadeOut(1000, function () {
                image.attr("src", "/assets/tree_"+variation+".png");
                image.fadeIn(1000);
            });

            if(variations.length > 0) {
                swapImage(variations);
            }
        }, timing);
    };

    var growTree = function() {
        if(!skip_transitions) {
            skip_transitions = true;
            var variations = ['donations', 'medium', 'small'];
            swapImage(variations, 500);
        }
    };

});
