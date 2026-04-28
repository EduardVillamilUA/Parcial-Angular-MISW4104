import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { RepositoriesRoutingModule } from './repositories.routing';

@NgModule({
  imports: [
    CommonModule,
    RepositoriesRoutingModule
  ],
  declarations: [RepositoriesListComponent],
  exports: [RepositoriesListComponent]
})
export class RepositoriesModule { }
