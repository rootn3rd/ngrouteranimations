import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

const MATERIAL_COMPONENTS = [
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule
];

@NgModule({
  imports: MATERIAL_COMPONENTS,
  exports: MATERIAL_COMPONENTS
})
export class CustomMaterialModule {}
