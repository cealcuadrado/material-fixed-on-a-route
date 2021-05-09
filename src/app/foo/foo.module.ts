import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooRoutingModule } from './foo-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';


@NgModule({
  declarations: [OneComponent, TwoComponent, ThreeComponent],
  imports: [
    CommonModule,
    FooRoutingModule
  ]
})
export class FooModule { }
