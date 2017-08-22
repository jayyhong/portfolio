import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  count: any;
  values: any;
  constructor() {
    this.count = 0;
    this.values ='';
  }

  ngOnInit() {
    console.log(this.count)
    window.addEventListener("scroll", () => {
      this.count = Math.floor(window.pageYOffset / 45)
    })
  }

}
