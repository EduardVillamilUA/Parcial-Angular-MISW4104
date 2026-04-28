import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';

const routes: Routes = [
  { path: '', component: RepositoriesListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RepositoriesRoutingModule { }

export const RepositoriesRoutes = RouterModule.forChild(routes);
