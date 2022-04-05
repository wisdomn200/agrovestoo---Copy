import { Component, OnInit } from '@angular/core';
import { Slideshow } from "./slideshow";
 
console.log(Slideshow);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ImagePath: string;
  
  constructor() {
      //image location
      this.ImagePath = '/assets/images/rice.jpg'
      this.ImagePath =  '/assets/images/images/bellpepper.jpg'
      this.ImagePath =  '/assets/images/images/egg.jpeg'
    
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
    }
   
  ngOnInit(): void {
  }

}

