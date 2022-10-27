import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//cargaJs
import { CargaJsService } from './carga-js.service';
//fin cargaJs

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BioComponent } from './components/bio/bio.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HyssComponent } from './components/hyss/hyss.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BioComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    HyssComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    BioComponent,
    PresupuestoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      showSubtitle: true,
    }),
    HttpClientModule,
  ],
  providers: [CargaJsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
