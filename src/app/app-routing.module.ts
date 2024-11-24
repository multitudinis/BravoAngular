import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from "./components/home/home.component";
import { authGuard } from "./guards/auth-guard.guard";
import { LoginComponent } from "./login/login/login.component";
import { PerfilComponent } from "./login/perfil/perfil.component";
import { CadastroUsuarioComponent } from "./login/cadastro/cadastro.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "perfil",
    component: PerfilComponent,
    canActivate: [authGuard]
  },
  {
    path: "cadastrousuario",
    component: CadastroUsuarioComponent
  },
  
  {
    path: "obra",
    loadChildren: () => 
      import("./obra/obra-routing.module").then((m) => m.ObraRoutingModule),
  },
  {
    path: "usuario",
    loadChildren: () =>
      import("./usuario/usuario.module").then((m) => m.UsuarioModule),
  },
  {
    path: "tarefa",
    loadChildren: () =>
      import("./tarefa/tarefa-routing.module").then(
        (m) => m.TarefaRoutingModule
      )
  },
  {
    path: "cliente",
    loadChildren: () =>
      import("./cliente/cliente-routing.module").then(
        (m) => m.ClienteRoutingModule
      ),
  },
  {
    path: "funcionario",
    loadChildren: () =>
      import("./funcionario/funcionario-routing.module").then(
        (m) => m.FuncionarioRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
