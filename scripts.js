$(function(){
  $("#homebutton").click(function() {
      $('html,body').animate({scrollTop: $(".CoverPic").offset().top},"slow");
  });
});
$(function(){
  $("#aboutmebutton").click(function() {
      $('html,body').animate({scrollTop: $(".AboutMe").offset().top},"slow");
  });
});
$(function(){
  $("#projectsbutton").click(function() {
      $('html,body').animate({scrollTop: $(".Projects").offset().top},"slow");
  });
});
