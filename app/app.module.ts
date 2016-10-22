import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { routing } from './app.routing';

import { DashboardComponent }  from './dashboard.component';
import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { UserService }         from './user.service';
import { UsersComponent }      from './users.component';
import { UserDetailComponent } from './user-detail.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule, routing,  HttpModule ],
    declarations: [  DashboardComponent, AppComponent, HeroDetailComponent, HeroesComponent, UsersComponent, UserDetailComponent],
    providers:    [ HeroService, UserService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
