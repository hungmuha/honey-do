import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { MainService } from './main/main.service';
import { GamePageComponent } from './game-page/game-page.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
	{ path: '',component:LandingPageComponent},
	{ path: 'Profile/:id', component:UserProfileComponent},
  { path: 'GamePage/:id', component:GamePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserProfileComponent,
    GamePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'honey-do'}),
    RouterModule.forRoot(
    	appRoutes
    	),
    HttpModule,
    FormsModule,
    CommonModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
