import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { TokenService } from '../../Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;
  constructor(
    private auth:AuthService,
    private token:TokenService,
    private router:Router
  ) { }

  ngOnInit() {

    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    console.log(this.loggedIn);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
