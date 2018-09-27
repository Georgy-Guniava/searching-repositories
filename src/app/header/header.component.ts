import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag = true;

  constructor() { }

  ngOnInit() {
  }

  goMyList() {
    this.flag = false;
  }

  goSearch() {
    this.flag = true;
  }

}
