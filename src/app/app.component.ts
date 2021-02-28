import { AppService } from './app.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: any;
  options2: any;
  options: any = {};
  themeSubscription: any;
  color: any;

  scrollProgress = '0%';
  scrollProgressThumb = '0px';
  //@ViewChild('scrollable') elementView: ElementRef;

  constructor(public app: AppService) {}

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    this.scrollProgress =
      Math.round(
        (event.target.scrollTop * 100) /
          (event.target.scrollHeight - event.target.clientHeight)
      ) + '%';

    this.scrollProgressThumb = this.scrollProgress;
  }
  onSectionChange(event) {
    console.log(event);
  }
  ngOnDestroy(): void {}
}
