import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { ResumeComponent } from './components/resume/resume.component';
import {SocialAuthServiceConfig,SocialAuthService} from 'angularx-social-login'
import {FacebookLoginProvider} from 'angularx-social-login'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:'SocialAuthServiceConfig',
      useValue:{
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("615611080049910"),
          },
        ],
        onError: (err) => {
          console.error(err)
        },
      }  as SocialAuthServiceConfig,
    },
    SocialAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
