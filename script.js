//Wait till the DOM is ready.
$(function () {
  var roles = ["Student", "VITian", "Sportsman", "Musician", "Scuba Diver"];
  var urls = ["","","","","https://www.youtube.com/watch?v=Ix5gE_llx-Q"]
  var count = 0;
  setInterval(() => {
    //count = 0;
   $("#intro .content h2 span").fadeOut("slow", function() {
     $(this).text(roles[count++ % roles.length]);
     $(this).fadeIn("slow");   
     //$('#skill_url').attr("href", urls[count++ % roles.length]);
   });   
  },  1500);
});