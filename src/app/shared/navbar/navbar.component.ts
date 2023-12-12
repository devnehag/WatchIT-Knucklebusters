import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string;

  constructor(public authService: AuthService,private router: Router,private searchService: SearchService) { }
  onLoginClick() {
    this.authService.changeHasAccount(true);
    this.router.navigate(['/auth']);
  }
   onSignupClick(){
    this.authService.changeHasAccount(false);
    this.router.navigate(['/auth']);

   }
  onLogoutClick() {
  // this.authService.logout(); <!--Need to be implemented in auth component-->
  this.authService.changeHasAccount(false)
  this.router.navigate(['/']);
}
onSearchClick() {
  this.searchService.searchMedia(this.searchTerm);
  this.router.navigate(['/search-results']);
 }
}
