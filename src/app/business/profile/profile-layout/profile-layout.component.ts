import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.css'
})
export default class ProfileLayoutComponent {

}
