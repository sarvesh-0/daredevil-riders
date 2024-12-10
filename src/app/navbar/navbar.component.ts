import { Component } from '@angular/core';
import { MaterialModules } from '../shared-materials';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MaterialModules,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
