import { HistoricoChatComponent } from './modulos/paciente/pages/chat/components/historico-chat/historico-chat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { HomeComponent } from './modulos/paciente/home/home.component';
import { PacienteOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/paciente-ocorrencia/paciente-ocorrencia.component';
import { CriarOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/components/criar-ocorrencia/criar-ocorrencia.component';
import { HistoricoOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/components/historico-ocorrencia/historico-ocorrencia.component';
import { PacienteComponent } from './modulos/paciente/paciente/paciente.component';
import { NovoChatComponent } from './modulos/paciente/pages/chat/components/novo-chat/novo-chat.component';
import { PacienteChatComponent } from './modulos/paciente/pages/chat/paciente-chat/paciente-chat.component';
import { PacienteEducativoComponent } from './modulos/paciente/pages/educativo/paciente-educativo/paciente-educativo.component';
import { ListaVideosComponent } from './modulos/paciente/pages/educativo/components/lista-videos/lista-videos.component';
import { ListaArtigosComponent } from './modulos/paciente/pages/educativo/components/lista-artigos/lista-artigos.component';
import { EducativoGeralComponent } from './modulos/paciente/pages/educativo/components/educativo-geral/educativo-geral.component';
import { DiarioBemEstarComponent } from './modulos/paciente/home/components/diario-bem-estar/diario-bem-estar.component';
import { DetalheOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/components/detalhe-ocorrencia/detalhe-ocorrencia.component';
import { ProfissionalComponent } from './modulos/profissional/profissional/profissional.component';
import { HomeProssionalComponent } from './modulos/profissional/home/home.component';
import { LoginProfissionalComponent } from './modulos/profissional/pages/login-profissional/login-profissional.component';
import { GerenciarOcorrenciaComponent } from './modulos/profissional/pages/ocorrencia/gerenciar-ocorrencia/gerenciar-ocorrencia.component';
import { ListaOcorrenciaComponent } from './modulos/profissional/pages/ocorrencia/lista-ocorrencia/lista-ocorrencia.component';

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
      { path: 'bem-estar/diario', component: DiarioBemEstarComponent },
      {
        path: 'ocorrencia', component: PacienteOcorrenciaComponent, children: [
          {
            path: 'nova', component: CriarOcorrenciaComponent,
          },
          {
            path: 'historico', component: HistoricoOcorrenciaComponent,
          },
          {
            path: 'detalhe/:id_ocorrencia', component: DetalheOcorrenciaComponent,
          }

        ]
      },
      {
        path: 'chat', component: PacienteChatComponent, children: [
          {
            path: 'novo', component: NovoChatComponent,
          },
          {
            path: 'historico', component: HistoricoChatComponent,
          }
        ]
      },
      {
        path: 'educativo', component: PacienteEducativoComponent, children: [
          {
            path: '', component: EducativoGeralComponent,
          },
          {
            path: 'lista-videos', component: ListaVideosComponent,
          },
          {
            path: 'lista-artigos', component: ListaArtigosComponent,
          }
        ]
      }
    ]
  },

  { path: 'login/profissional', component: LoginProfissionalComponent },

  {
    path: 'profissional', component: ProfissionalComponent,
    children: [

      { path: '', component: HomeProssionalComponent },
      { path: 'home', component: HomeProssionalComponent },
      { path: 'bem-estar/diario', component: DiarioBemEstarComponent },
      { path: 'gerenciar-ocorrencia/:id_ocorrencia', component: GerenciarOcorrenciaComponent },
      { path: 'ocorrencias', component: ListaOcorrenciaComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
