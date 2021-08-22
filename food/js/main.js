$(document).ready(function(){
    
  $(".food-slider").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    margin: 50,
    autoplay: false,
    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        nav:false
      },
      600: {
        items: 1,
        nav:false
      },
      1000: {
        items: 3
      }
  }
  });

$(".nav-trigger").click(function(){

  $(".site-content-wraper").toggleClass(".scaled");

});





    
});