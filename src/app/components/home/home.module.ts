import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class HomeModule { }
