import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { NgSelectModule } from "@ng-select/ng-select";
import { UserRoutingModule } from "./user-routing.module";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [CadastrarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    NgSelectModule,
    UserRoutingModule,
    ToastModule,
  ],
})
export class UsuarioModule {}
