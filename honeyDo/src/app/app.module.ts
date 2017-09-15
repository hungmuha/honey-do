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
import { SearchPartnerComponent } from './search-partner/search-partner.component';
import { NewGameComponent } from './new-game/new-game.component';

const appRoutes: Routes = [
	{ path: '',component:LandingPageComponent},
	{ path: 'Profile/:id', component:UserProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserProfileComponent,
    SearchPartnerComponent,
    NewGameComponent
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
