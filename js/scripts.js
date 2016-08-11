$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());
    var gender = parseInt($(".gender").val());
    var place = parseInt($(".place").val());
    var meal = parseInt($(".meal").val());
    var creature = parseInt($(".creature").val());
    var counter = gender + place + meal + creature;
    if (age < 18 && counter === 0)  {
      $("#kanye").show();
    } else if (age >= 18 && 0<counter<=4) {
      $("#bieber").show();
    } else if (age >= 18 && 4<counter<=8) {
      $("#nicki").show();
    } else if (age >= 18 && 8<counter<11) {
      $("#rihanna").show();
    } else if (counter === 11) {
      $("#ruby").show();
    } else {
      $("#kanye").show();
    }
  });
});
