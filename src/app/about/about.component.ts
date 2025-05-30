import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-about',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  angularVersion : string = "";

  constructor(){
    this.angularVersion = environment.angularVersion;
  }
}
