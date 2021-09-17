import { AppService } from './app.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
  title: string = 'Prateek Roy';
  constructor(
    public app: AppService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Angular, Universal, Portfolio, Frontend' },
      { name: 'description', content: 'Full Stack Portfolio' },
      { name: 'author', content: 'Prateek Roy' },
      { name: 'robots', content: 'index, follow' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '' },
      { name: 'twitter:creator', content: '@royprateek96' },
      {
        name: 'twitter:title',
        content: "Prateek's Portfolio",
      },
      {
        name: 'twitter:description',
        content: 'Hey! My name is Prateek and this is my portfolio.',
      },
      {
        name: 'twitter:image',
        content: '/assets/images/thumbnail.png',
      },

      //LinkedIN
      { property: 'og:title', content: "Prateek's Portfolio" },
      {
        property: 'og:image',
        content: '/assets/images/thumbnail.png',
      },
      {
        property: 'og:description',
        content: 'Hey! My name is Prateek and this is my portfolio.',
      },
      {
        property: 'og:url',
        content: 'https://prateekroy96.github.io/portfolio/',
      },
    ]);
  }
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
