import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

const routes: Routes = [
  { path: '',
    component: RepositoriesListComponent,
    children: [
      { path: ':id', component: RepositoryDetailComponent } // El hijo (detalle)
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RepositoriesRoutingModule { }

export const RepositoriesRoutes = RouterModule.forChild(routes);
