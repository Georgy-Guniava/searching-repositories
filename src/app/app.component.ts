import { Component } from '@angular/core';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RepositoriesService]
})
export class AppComponent {
}
