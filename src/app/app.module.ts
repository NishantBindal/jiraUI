import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './shared/about.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './shared/contact.component'
import { HomeComponent } from './shared/home.component';
import { UserFormComponent } from './form-data/user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: UserFormComponent },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
