import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { AppMaterialModule } from './app-material/app-material.module';
import { StatusPipe } from './pipes/status.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    StatusPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe,
    StatusPipe
  ]
})
export class SharedModule { }
