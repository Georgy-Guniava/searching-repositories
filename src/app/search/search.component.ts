import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../repositories.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  language = 'JavaScript';
  searchText = '';
  type = 'Repositories';
  repositories: Array<any> = [];
  displayType = true;
  error: string;
  notFoundFlag = false;

  constructor(private repositoriesService: RepositoriesService) {}

  ngOnInit() {
  }

  private createReqUrl(): string {
    let url = `https://api.github.com/search/${this.type.toLowerCase()}?q=${this.searchText}`;
    // if (this.topics) {
    //   url = url + 'topic:' + this.tags.replace('/[\s,\,,\,\s,\s\,\s,\s\,]/', '&topic:');
    // }
    url = url + `language:${this.language.toLowerCase()}&sort=stars&order=desc`;
    return url;
  }

  searchRepositories () {
    if (!this.searchText.length) {
      this.error = 'Please fill out the form completely!';
      console.log('this.error', this.error);
      return false;
    }
    const url = this.createReqUrl();
    const abservRepositories = this.repositoriesService.getRepositories(url);
    abservRepositories.subscribe(  (repositories) => {
      // @ts-ignore
      const items  = repositories.items;
      this.notFoundFlag = !items.length;
      this.repositories = this.repositoriesService.parsToRepo(items);
    });

  }

  clickOnCheckbox(id) {
    this.repositories.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
        if (item.checked) {
          this.repositoriesService.addRepository(item);
        } else {
          this.repositoriesService.removeRegository(item.id);
        }
      }
    });
  }

  changeDisplayType() {
    this.displayType = !this.displayType;
    console.log('this.displayType', this.displayType);
  }

}
