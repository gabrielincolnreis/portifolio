import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileCardComponent } from './pages/main/profile-card/profile-card.component';
import { ExperienceComponent } from './pages/main/experience/experience.component';
import { SkillsComponent } from './pages/main/skills/skills.component';
import { AboutComponent } from './pages/main/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ProfileCardComponent,
    ExperienceComponent,
    SkillsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
