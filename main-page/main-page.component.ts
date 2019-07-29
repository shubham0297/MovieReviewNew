import { Component, OnInit, Input } from '@angular/core';
import { NavigationLinks } from '../navigation-links';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

 
  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  movieReview(){
    this.router.navigate(['/movie']);
   }

}

