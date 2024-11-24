import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ListarComponent } from "./listar/listar.component";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";

const routes: Routes = [
  {
    path: "listar",
    component: ListarComponent,
  },
  {
    path: "cadastrar",
    component: CadastrarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class TarefaRoutingModule {}
