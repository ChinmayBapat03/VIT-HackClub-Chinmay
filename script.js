//Wait till the DOM is ready.
$(function () {
  var roles = ["Student", "VITian", "Sportsman", "Musician", "Scuba Diver"];
  var urls = ["","","","","https://www.youtube.com/watch?v=Ix5gE_llx-Q"];
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
          $('#skill_url').attr("href", urls[url_count++ % roles.length]);
        //},1000);
    //}
  //);
   
   $typeSpan
     .typistRemove(roles[count % roles.length].length)
     .typistPause(2000)
     .typistAdd(roles[count % roles.length]);
     count++;
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
