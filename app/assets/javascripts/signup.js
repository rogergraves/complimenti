$(document).ready(function() {
   var activateSecondSlide = function() {
       console.log("We're in!");
       if($('#respondent_event').val() && $('#respondent_number_of_donors').val()) {
//            $('.carousel-control.right').show();
       }
   }

   $('#respondent_number_of_donors').change(activateSecondSlide);
   $('#respondent_event').change(activateSecondSlide);
    $('#respondent_number_of_donors').keypress(activateSecondSlide);
    $('#respondent_event').keypress(activateSecondSlide);
});