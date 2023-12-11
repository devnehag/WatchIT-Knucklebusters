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
  onSearchClick() {
    console.log('this.searchterm on search click', this.searchTerm);

    const search = this.searchTerm
    this.searchService.searchMedia(search);
    this.router.navigate(['/search-results']);
   }
  onLogoutClick() {
  this.authService.logout();
  this.router.navigate(['/']);
}
}
