import { Component, OnInit } from '@angular/core';
import { faCoffee, faCaretDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  caretDown: any = faCaretDown;
  constructor() {}

  ngOnInit(): void {}
  scrollWork() {
    document.querySelector('#work').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
