import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }
  myRepositories: Array<any> = [];
  repositories: Array<any> = [];

  private httpHeaders = new HttpHeaders({'Accept': 'application/vnd.github.mercy-preview+json'});

   parsToRepo(items) {
    const self = this;
    return items.map( item => {
      return {
        id: item.id,
        full_name: item.full_name,
        description: item.description,
        stargazers_count: Math.floor(item.stargazers_count / 1000),
        language: item.language,
        topics: item.topics,
        url: item.html_url,
        checked: !!self.myRepositories.find((element) => element.id === item.id)
      };
    });
  }

  public  getRepositories(url: string) {
    const options = { headers: this.httpHeaders };
    return this.httpClient.get(url, options);
  }

  public getMyRepositories () {
    return this.myRepositories;
  }

  public addRepository (repo) {
     this.myRepositories.push(repo);
  }

  public removeRegository (id) {
     const index = this.myRepositories.findIndex(item => item.id === id);
     this.myRepositories.splice(index, 1);
  }
}
