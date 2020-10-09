//Wait till the DOM is ready.
$(function () {
  var roles = ["Student", "VITian", "Sportsman", "Musician", "Scuba Diver"];
  var count = 0;
  setInterval(() => {
    console.log(roles[count++ % roles.length]);   
  },  1000);
});