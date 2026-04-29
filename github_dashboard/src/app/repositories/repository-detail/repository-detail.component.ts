import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepositoryDetailService } from './repository-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})
export class RepositoryDetailComponent implements OnInit {

  repositoryDetail$!: Observable<Repository | undefined>;

  constructor(
    private route: ActivatedRoute, 
    private repoService: RepositoryDetailService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.repositoryDetail$ = this.repoService.getRepository(id);
      
    });
  }

}
