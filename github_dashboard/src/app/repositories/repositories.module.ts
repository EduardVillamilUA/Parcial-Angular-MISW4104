import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { RepositoriesRoutingModule } from './repositories.routing';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RepositoriesRoutingModule
  ],
  declarations: [RepositoriesListComponent, RepositoryDetailComponent],
  exports: [RepositoriesListComponent]
})
export class RepositoriesModule { }
