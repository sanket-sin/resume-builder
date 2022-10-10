import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  error: any;
  errorDetail:any;
  loginUserData = {}
  fName!: string;
  lName!: string;
  email!: string;
  contact!: string;
  address!: string;
  personalDetails!: string;
  url: any = window.location.href;
  constructor(private routes: Router,) { 


  }


  ngOnInit() {
    if(this.url.endsWith("form/personal-details"))
    this.getLabels();
  }

  form = new FormGroup({
    personalDetails:new FormControl(""),
    fName: new FormControl("", [Validators.required]),
    lName: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    contact: new FormControl("", [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    address: new FormControl("", [Validators.required]),
  })

  get formData() {
    return this.form.controls;
  }

  onSubmit() {
    console.log("user login successfuly")
    // this.form.reset()
  }
  nextForm(){
    if(this.form.invalid){
      alert("Please fill all the details")
    }
    else if(this.url.endsWith("form/personal-details")){
      this.routes.navigateByUrl('form/education');
    }
  }
  
  getLabels(){

    if(this.url.endsWith("form/personal-details")){
      this.fName='First Name';
      this.lName='Last Name';
      this.email='Email';
      this.contact= 'Contact';
      this.address='Address';
      this.personalDetails='Personal Details';
    }
    else if(this.url.endsWith("form/education")){
      this.personalDetails='Education';
      this.fName='University';
      this.lName='Location';
      this.email='Course Name';
      this.contact= 'Start Name';
      this.address='End Date';
    };

  }


  }
