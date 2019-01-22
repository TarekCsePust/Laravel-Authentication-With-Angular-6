import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JarwisService } from '../../Services/jarwis.service';
import { TokenService } from '../../Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(
    private jarwis:JarwisService,
    private token:TokenService,
    private router:Router,
    private auth:AuthService
  ) { }

  onSubmit() {
    return this.jarwis.signup(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   );
 }

 handleError(error) {
  this.error = error.error.errors;
}


handleResponse(data) {
  this.token.handle(data.access_token);
  this.auth.changeAuthStatus(true);
  this.router.navigateByUrl('/profile');
}

  ngOnInit() {
  }

}
