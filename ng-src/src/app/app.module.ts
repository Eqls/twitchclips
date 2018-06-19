import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from  "@angular/router";
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';

//services
import { TwitchService } from './services/twitch.service';
import { AuthService } from './services/auth.service';
import { CommentsService } from './services/comments.service';
import { UsersService } from './services/users.service';

import { ClipComponent } from './clip/clip.component';
import { SearchComponent } from './search/search.component';
import { CommentsComponent } from './comments/comments.component';

var routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clip/:slug', component: ClipComponent},
  { path: 'search/:query', component: SearchComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    ClipComponent,
    SearchComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    InfiniteScrollModule,
    MomentModule
  ],
  providers: [TwitchService, AuthService, CommentsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
