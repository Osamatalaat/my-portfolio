
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false
})
export class NavbarComponent {
  menuItems = [
    { name: 'Home', link: '#hero' },
    { name: 'About', link: '#about' },
    { name: 'Educations', link: '#education' },
    { name: 'Skills', link: '#skills' },
    { name: 'Works', link: '#works' },
    { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' }
  ];

  activeItem = 'Home';

  setActive(name: string) {
    this.activeItem = name;
  }


isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
}
