$(function() {
  $("form").submit(function(event) {
    var age = parseInt($("#age").val();
    var gender = parseInt($(".gender").val());
    var place = parseInt($(".place").val())

    event.preventDefault();
  });
});
