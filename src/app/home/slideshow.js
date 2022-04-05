// @ts-nocheck
export const Slideshow = "Slideshow";

  var myIndex = 0;
        carousel();
        
        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
        
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
       
          setTimeout(carousel, 2000); // Change image every 2 seconds
        }