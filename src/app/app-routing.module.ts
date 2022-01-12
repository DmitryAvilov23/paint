import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaintFieldComponent } from './views/paint-field/paint-field.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./views/paint-field/paint-field.module').then(m => m.PaintFieldModule),
    component: PaintFieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
