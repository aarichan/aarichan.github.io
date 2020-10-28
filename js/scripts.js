$(function(){
  $("#aboutmebutton").click(function() {
      $('html,body').animate({scrollTop: $(".About-Me").offset().top},'medium');
  });
});
$(function(){
  $("#homebutton").click(function() {
      $('html,body').animate({scrollTop: $(".backgroundcontainer").offset().top},'medium');
  });
});
