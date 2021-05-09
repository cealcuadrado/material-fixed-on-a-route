import { ThreeComponent } from './foo/three/three.component';
import { TwoComponent } from './foo/two/two.component';
import { OneComponent } from './foo/one/one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'foo',
    children: [
      {
        path: 'one',
        component: OneComponent
      },
      {
        path: 'two',
        component: TwoComponent
      },
      {
        path: 'three',
        component: ThreeComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/foo/one',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
