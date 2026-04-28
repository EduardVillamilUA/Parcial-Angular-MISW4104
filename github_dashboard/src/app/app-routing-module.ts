import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'users', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
  },
  // Ruta para Repositorios
  { 
    path: 'repositories', 
    loadChildren: () => import('./repositories/repositories.module').then(m => m.RepositoriesModule) 
  },
  // Ruta por defecto
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  // Ruta para manejar errores 404
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
