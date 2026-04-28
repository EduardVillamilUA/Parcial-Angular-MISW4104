import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../repository';
import { RepositoriesListService } from './repositories-list.service';

@Component({
  standalone: false,
  selector: 'app-repositories-list',
  templateUrl: './repositories-list.component.html',
  styleUrls: ['./repositories-list.component.css']
})
export class RepositoriesListComponent implements OnInit {

  repositories$!: Observable<Repository[]>;

  constructor(private repositoriesListService: RepositoriesListService) { }

  ngOnInit() {
    this.repositories$ = this.repositoriesListService.getRepositories();
    console.log(this.repositories$);
  }

}
