import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('subMenu') subMenu!: ElementRef;
  @ViewChild('userPic') userPic!: ElementRef;

  constructor(
    private auth_service: AuthService,
    private router: Router)
    {}

  get user(){
    return this.auth_service.user;
  }

  toggleProfileMenu(){
    const subMenu = document.getElementById("subMenu");
    subMenu?.classList.toggle("open-menu");
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const subMenuElement = this.subMenu?.nativeElement;
    const userPicElement = this.userPic?.nativeElement;
    
    if (subMenuElement && userPicElement) {
      const isClickInsideMenu = subMenuElement.contains(event.target);
      const isClickOnUserPic = userPicElement.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnUserPic && subMenuElement.classList.contains('open-menu')) {
        subMenuElement.classList.remove('open-menu');
      }
    }
  }

  logoutHandler(){
    this.auth_service.logOut();
    this.router.navigate(['/restaurant-list'])
  }

  loginHandler(){
    this.router.navigate(['/login']);
  }

  registerHandler(){
    this.router.navigate(['/register']);
  }
}
