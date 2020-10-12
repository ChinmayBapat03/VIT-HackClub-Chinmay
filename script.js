//Wait till the DOM is ready.
$(function () {
  var roles = ["Student", "VITian", "Sportsman", "Musician", "Scuba Diver"];
  var urls = ["https://chennai.vit.ac.in/about/","https://chennai.vit.ac.in/about/","https://www.youtube.com/watch?v=s5YvChyzQn8","","https://www.youtube.com/watch?v=Ix5gE_llx-Q"];
  var count = 0;
  var url_count = 0;
  var $typeSpan = $("#intro .content h2 span").typist({
    text: roles[count]
  });   
  
  setInterval
  (() => 
  {
      if(count==roles.length) {count=0;url_count=0}
      //count = 0;
      //$("#intro .content h2 span").fadeOut("slow", function() 
        //{
          //$(this).text(roles[count++ % roles.length]);
          //$(this).fadeIn("slow");   
          $('#skill_url').attr("href", urls[url_count % roles.length]);
          $('#dynamic_url').val(urls[url_count % roles.length]);
          url_count++;
        //},1000);
    //}
  //);
   
   $typeSpan
     .typistRemove(roles[count++ % roles.length].length)
     .typistPause(2000)
     .typistAdd(roles[count % roles.length]);
  }, 5000);
    $(".navbar").hide();
    $(window).scroll
    (
      function () 
      {
        if ($(window).scrollTop() > 40) 
        {
          $(".navbar").slideDown(100);
        } 
        else 
        {
          $(".navbar").slideUp(100);
        }
      }
    );
});
$(".go-down a").click(function (e) {
  e.preventDefault();
  var top = $($(this).attr("href")).position().top - 70;
  $("html, body").animate(
    {
      scrollTop: top
    },
    1000
  );
});


