import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../repositories.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  repositories: Array<any> = [];
  displayType = true;
  notRepoFlag = true;
  constructor(private repositoriesService: RepositoriesService) {
  }

  ngOnInit() {
    this.repositories = this.repositoriesService.getMyRepositories();
    this.notRepoFlag = !this.repositories.length;
  }

  clickOnCheckbox(id) {
    this.repositoriesService.removeRegository(id);
  }

  changeDisplayType() {
    this.displayType = !this.displayType;
  }

}
