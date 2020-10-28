$(function(){
  $("#aboutmebutton").click(function() {
      $('html,body').animate({scrollTop: $(".AboutMe").offset().top},"medium");
  });
});
$(function(){
  $("#homebutton").click(function() {
      $('html,body').animate({scrollTop: $(".CoverPic").offset().top},"medium");
  });
});
