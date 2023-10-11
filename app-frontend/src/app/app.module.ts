import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './shared/pages/login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './modulos/paciente/home/home.component';
import { PacienteNavbarComponent } from './modulos/paciente/components/paciente-navbar/paciente-navbar.component';
import { PacienteSidebarComponent } from './modulos/paciente/components/paciente-sidebar/paciente-sidebar.component';
import { PacienteOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/paciente-ocorrencia/paciente-ocorrencia.component';
import { CriarOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/components/criar-ocorrencia/criar-ocorrencia.component';
import { HistoricoOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/components/historico-ocorrencia/historico-ocorrencia.component';
import { BemEstarComponent } from './modulos/paciente/home/components/bem-estar/bem-estar.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PacienteComponent } from './modulos/paciente/paciente/paciente.component';
import { PacienteChatComponent } from './modulos/paciente/pages/chat/paciente-chat/paciente-chat.component';
import { HistoricoChatComponent } from './modulos/paciente/pages/chat/components/historico-chat/historico-chat.component';
import { NovoChatComponent } from './modulos/paciente/pages/chat/components/novo-chat/novo-chat.component';
import {MatDividerModule} from '@angular/material/divider';
import { PacienteEducativoComponent } from './modulos/paciente/pages/educativo/paciente-educativo/paciente-educativo.component';
import { ListaVideosComponent } from './modulos/paciente/pages/educativo/components/lista-videos/lista-videos.component';
import { ListaArtigosComponent } from './modulos/paciente/pages/educativo/components/lista-artigos/lista-artigos.component';
import { EducativoGeralComponent } from './modulos/paciente/pages/educativo/components/educativo-geral/educativo-geral.component';
import { DiarioBemEstarComponent } from './modulos/paciente/home/components/diario-bem-estar/diario-bem-estar.component';
import { DetalheOcorrenciaComponent } from './modulos/paciente/pages/ocorrencia/components/detalhe-ocorrencia/detalhe-ocorrencia.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PacienteNavbarComponent,
    PacienteSidebarComponent,
    PacienteOcorrenciaComponent,
    CriarOcorrenciaComponent,
    HistoricoOcorrenciaComponent,
    BemEstarComponent,
    PacienteComponent,
    PacienteChatComponent,
    NovoChatComponent,
    HistoricoChatComponent,
    PacienteEducativoComponent,
    ListaVideosComponent,
    ListaArtigosComponent,
    EducativoGeralComponent,
    DiarioBemEstarComponent,
    DetalheOcorrenciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
