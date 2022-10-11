import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
// import { ToastrManager } from 'ng6-toastr-notifications';



declare var FB: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  // constructor(private route:Router,private fb:FormBuilder,public toastr: ToastrManager) { }



public loggedIn!: Boolean
public user:any;


  constructor(private route:Router,private fb:FormBuilder, private authService:SocialAuthService) { }

  ngOnInit(): void {


      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = user!=null;
        console.log('hello',user)
      })

    // (window as any).fbAsyncInit = function() {
    //   FB.init({
    //     appId      : '786489245993026',
    //     cookie     : true,
    //     xfbml      : true,
    //     version    : 'v15.0.'
    //   });
    //   FB.AppEvents.logPageView();
    // };
  
    // (function(d, s, id){
    //    var js, fjs = d.getElementsByTagName(s)[0];
    //    if (d.getElementById(id)) {return;}
    //    js = d.createElement(s); js.id = id;
    //    js.src = "https://connect.facebook.net/en_US/sdk.js";
    //    fjs.parentNode.insertBefore(js, fjs);
    //  }(document, 'script', 'facebook-jssdk'));
  }


  signIn(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }


  openForm(){
    this.route.navigateByUrl('form/personal-details');
  }


  submitLogin()
  {
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response: { authResponse: any; })=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            alert('login successful');
          }
           else
           {
           console.log('User login failed');
         }
      });

    }
}
