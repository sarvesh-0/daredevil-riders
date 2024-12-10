import { Component } from '@angular/core';
import { MaterialModules } from '../shared-materials';

@Component({
  selector: 'app-registration',
  imports: [MaterialModules],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
   // Properties for form fields
   name: string = '';
   password: string = '';
   phone: string = '';
 
   // Method for registering the user
   register(): void {
     if (this.name && this.password && this.phone) {
       alert(`Registration Successful for ${this.name}`);
     } else {
       alert('Please fill all the fields!');
     }
   }
}
