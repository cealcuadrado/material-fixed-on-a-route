import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from "@angular/material/toolbar";

let modules = [
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule
  ]
})
export class MaterialModule { }
