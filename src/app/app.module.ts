import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './shared/about.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './shared/contact.component'
import { HomeComponent } from './shared/home.component';
import { UserFormComponent } from './form-data/user-form.component';
import { HttpModule } from '@angular/http';
import { SprintDetailsComponent } from './sprint-details/sprint-details.component';
import { JiraApiService } from './boards/boards.service';
import { LoadingModule } from 'ngx-loading';
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from '@angular/common/http/src/client';
import {ChartsModule} from 'ng2-charts'
//import { ProgressBarModule } from 'primeng/components/progressbar/progressbar';
import {ProgressBarModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserFormComponent,
    SprintDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    LoadingModule,
    ChartsModule,
    RouterModule.forRoot(
      [
        { path: 'login', component: UserFormComponent },
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
      ]),ProgressBarModule,
  ],
  providers: [ JiraApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
