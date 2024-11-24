import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListarComponent } from "./listar/listar.component";
import { FuncionarioRoutingModule } from "./funcionario-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatStepperModule } from "@angular/material/stepper";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgSelectModule } from "@ng-select/ng-select";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [CadastroComponent, ListarComponent],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatInputModule,
    NgSelectModule,
    TableModule,
  ],
})
export class FuncionarioModule {}
