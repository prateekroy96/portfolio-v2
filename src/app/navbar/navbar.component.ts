import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faBriefcase,
  faAddressCard,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  home: any = faHome;
  work: any = faBriefcase;
  about: any = faAddressCard;
  contact: any = faEnvelope;
  constructor(public app: AppService) {
    app.currentSection.subscribe((val) => {
      this.currentSection = val;
    });
  }
  currentSection: string = 'home';

  ngOnInit(): void {}
  scrollTo(id) {}
}
