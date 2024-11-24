import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
})
export class SharedModule {}
