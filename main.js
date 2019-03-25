/** ***************************************************
* 
* 
* 
* Portfolio mouse over
* 
* 
*/
$(".portfolioImage").hover(function(){
    $(this).css("opacity", "0.8");
}, function(){
    $(this).css("opacity", "0");
});
/** ***************************************************
* 
* 
* 
* Scrolling up & down
* 
* 
*/
$(document).ready(function(){
    $('a').on('click', function(evt){
       evt.preventDefault(); 
 var target = $(this).attr('href');
 $('html, body')
       .stop()
       .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});
/** ***************************************************
* 
* 
* Show button on scroll
* 
* 
* 
*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
