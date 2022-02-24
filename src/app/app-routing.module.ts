import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoComponent } from './components/aviso/aviso.component';

const routes: Routes = [
  { path: 'aviso', component: AvisoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'aviso' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
