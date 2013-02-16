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
                $('#button_2').show();
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
        $("#carousel-inner").removeClass("green-border");
        $("#carousel-inner").addClass("red-border");
        console.info("button_2 pushed");
        $("#email").focus();
    });
    $("#button_3").click(function() {
        $('.carousel').carousel('next');
        $("#carousel-inner").removeClass("red-border");
        $("#carousel-inner").addClass("green-border");
    });


    var swapImage = function(variations, timing) {
        timing = typeof timing !== 'undefined' ? timing : 4000;

        var variation = variations.pop();

        var image = $('.tree');

        setTimeout(function() {
            image.fadeOut(1000, function () {
                image.css("background", "url('/assets/tree_"+variation+".png')");
                image.fadeIn(1000);
            });

            if(variations.length > 0) {
                swapImage(variations);
            } else {
                setTimeout(function() {
                    $('.bubble-1').show();
                }, 3000);
                setTimeout(function() {
                    $('.bubble-2').show();
                }, 4000);
                setTimeout(function() {
                    $('.bubble-3').show();
                }, 5000);
            }
        }, timing);
    };

    var growTree = function() {
        var variations = ['large', 'medium', 'small'];
        swapImage(variations, 500);
    };

});
