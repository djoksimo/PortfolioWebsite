import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule} from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { CustomNavComponent } from './custom-nav/custom-nav.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { CustomParticlesComponent } from './custom-particles/custom-particles.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomNavComponent,
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutComponent,
    CustomParticlesComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    PdfViewerModule,
    FormsModule,
    AppRoutingModule,
    ParticlesModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
