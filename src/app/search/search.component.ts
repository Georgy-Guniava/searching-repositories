import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  language = 'JavaScript';
  tags = '';
  type = 'Repositories';

  constructor() {}
  ngOnInit() {
  }

  searchRepositories () {
    console.log('language', this.language, '\ntags', this.tags, '\ntype', this.type);
  }

}
