import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean;
  /**
   *
   */
  constructor(private authService:AuthService,private router:Router) {
    
    
  }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();

    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
  })
}
  logout(){
    this.authService.logout();
    this.isLoggedIn=false
    this.router.navigate(['Arabalar']) 
  }




}

