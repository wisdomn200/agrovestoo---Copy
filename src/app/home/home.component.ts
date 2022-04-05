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
    
    }
   
  ngOnInit(): void {
  }

}

