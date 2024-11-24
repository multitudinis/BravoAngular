import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { CadastroComponent } from "./cadastro/cadastro.component";
import { ListarComponent } from "./listar/listar.component";

const routes: Routes = [
  {
    path: "cadastro",
    component: CadastroComponent,
  },
  {
    path: "listar",
    component: ListarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class FuncionarioRoutingModule {}
