import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { HomeComponent } from './modulos/paciente/home/home.component';
import { PacienteOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/paciente-ocorrencia/paciente-ocorrencia.component';
import { CriarOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/components/criar-ocorrencia/criar-ocorrencia.component';
import { HistoricoOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/components/historico-ocorrencia/historico-ocorrencia.component';
import { PacienteComponent } from './modulos/paciente/paciente/paciente.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  //----------Shared
  { path: 'login', component: LoginComponent },
  { path: '#', component: LoginComponent },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },


  {
    path: 'paciente', component: PacienteComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      {
        path: 'ocorrencia', component: PacienteOcorrenciaComponent, children: [
          {
            path: 'nova', component: CriarOcorrenciaComponent,
          },
          {
            path: 'historico', component: HistoricoOcorrenciaComponent,
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
