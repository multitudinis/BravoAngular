import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatToolbarModule } from "@angular/material/toolbar";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SidenavListComponent } from "./components/template/navigation/sidenav-list/sidenav-list.component";
import { HeaderComponent } from "./components/template/navigation/header/header.component";
import { TokenInterceptor } from "./interceptor/token.interceptor";
import { FooterComponent } from "./components/template/footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";
import { ObraModule } from "./obra/obra.module";
import { TarefasModule } from "./tarefa/tarefas.module";

import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { environment } from "src/environments/environment";
import { ClienteModule } from "./cliente/cliente.module";
import { FuncionarioModule } from "./funcionario/funcionario.module";
import { BannerComponent } from "./shared/banner/banner.component";

import { LoginComponent } from "./login/login/login.component";
import { CadastroUsuarioComponent } from "./login/cadastro/cadastro.component";
import { PerfilComponent } from "./login/perfil/perfil.component";
import { FormBaseComponent } from "./login/form-base/form-base.component";
import { DropdownUfComponent } from "./login/dropdown-uf/dropdown-uf.component";
import { ContainerComponent } from "./login/container/container.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";

export function tokenGetter(): string {
  return localStorage.getItem("JWT_TOKEN_BRAVO")!;
}

@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,

    LoginComponent,
    BannerComponent,
    CadastroUsuarioComponent,
    PerfilComponent,
    FormBaseComponent,
    DropdownUfComponent,
    ContainerComponent
  ],
  imports: [
    MatCardModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatCheckboxModule,


    MatToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    ObraModule,
    TarefasModule,
    ClienteModule,
    FuncionarioModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains,
        disallowedRoutes: environment.disallowedRoutes,
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    JwtHelperService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [LoginComponent],
})
export class AppModule {}
