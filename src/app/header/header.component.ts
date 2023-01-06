import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon'; 

import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  scrollTo(fragment: string) {
    document.getElementById(fragment)?.scrollIntoView({behavior: 'smooth'})
  }
}
