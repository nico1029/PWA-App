import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => // eslint-disable-line @typescript-eslint/explicit-function-return-type
      import('./modules/home/home.module').then((m) => m.HomeModule), // eslint-disable-line @typescript-eslint/typedef
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
