import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CadastrarComponent } from "./cadastrar/cadastrar.component";

const routes: Routes = [
  {
    path: "cadastro",
    component: CadastrarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class UserRoutingModule {}
