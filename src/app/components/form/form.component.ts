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
  errorDetail: any;
  loginUserData = {}
  fName!: string;
  lName!: string;
  email!: string;
  contact!: string;
  address!: string;
  formHeader!: string;
  orgName!: string;
  position!: string;
  description!: string;
  url: any = window.location.href;
  formHeaderEducation: any;
  formHeaderPersonalDetail: any;
  formHeaderEducationDetail:any;
  forPersonalDetails:Boolean= false;
  forEducationDetails:Boolean = false;
  forExperienceDetails:Boolean = false;
  forProjectsDetails:Boolean = false;
  university!: string;
  location!: string;
  courseName!: string;
  startDate!: string;
  endDate!: string;
  constructor(private routes: Router,) {


  }


  ngOnInit() {
    this.getLabels();

    // this.formHeaderEducation = 'Education';
    // this.formHeaderPersonalDetail = 'Personal Details';
    // this.fName = 'First Name';
    // this.lName = 'Last Name';
    // this.email = 'Email';
    // this.contact = 'Contact';
    // this.address = 'Address';

    // if (this.url.endsWith("form/personal-details")){
    //   this.form.get('contact');
    // }
  }

  form = new FormGroup({
    formHeader: new FormControl(""),
    fName: new FormControl("", [Validators.required]),
    lName: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    contact: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    address: new FormControl("", [Validators.required]),
  })

  get formData() {
    return this.form.controls;
  }

  onSubmit() {
    console.log("user login successfuly")
    // this.form.reset()
  }
  nextForm() {
    if (this.form.invalid) {
      alert("Please fill all the details")
    }
    else if (this.url.endsWith("form/personal-details")) {
      this.routes.navigateByUrl('form/education');
    }
    else if (this.url.endsWith("form/education")) {
      this.routes.navigateByUrl('form/experience');
    }
    else if (this.url.endsWith("form/experience")) {
      this.routes.navigateByUrl('form/projects');
    }
    else if (this.url.endsWith("form/projects")) {
      this.routes.navigateByUrl('form/certificate');
    }
  }

  getLabels(){

    if(this.url.endsWith("form/personal-details")){
      this.forPersonalDetails = true;
      this.forEducationDetails = false;
      this.forExperienceDetails = false;
      this.forProjectsDetails = false;
      this.formHeaderPersonalDetail='Personal Details';
      this.fName='University';
      this.lName='Location';
      this.email='Course Name';
      this.contact= 'Start Name';
      this.address='End Date';
    }
    else if(this.url.endsWith("form/education")){
      this.formHeaderEducationDetail='Education';
      this.university='University';
      this.location='Location';
      this.courseName='Course Name';
      this.startDate= 'Start Name';
      this.endDate='End Date';
    }
    else if(this.url.endsWith("form/experience")){
      this.formHeader='Experience';
      this.orgName='First Name';
      this.position='Last Name';
      this.description='Email';
      this.startDate= 'Start Name';
      this.endDate='End Date';
    }
    else if(this.url.endsWith("form/projects")){
      this.formHeader='Projects';
      this.fName='University';
      this.lName='Location';
      this.email='Course Name';
      this.contact= 'Start Name';
      this.address='End Date';
    }
    else if(this.url.endsWith("form/certificate")){
      this.formHeader='Certificate';
      this.fName='University';
      this.lName='Location';
      this.email='Course Name';
      this.contact= 'Start Name';
      this.address='End Date';
    }

  }


}
