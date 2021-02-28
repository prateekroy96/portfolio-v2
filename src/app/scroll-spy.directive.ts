import {
  Directive,
  Injectable,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[scrollSpy]',
})
export class ScrollSpyDirective {
  public spiedTags = ['APP-HOME', 'APP-PROJECT', 'APP-ABOUT', 'APP-CONTACT'];
  ids = {
    'APP-HOME': 'home',
    'APP-PROJECT': 'work',
    'APP-ABOUT': 'about',
    'APP-CONTACT': 'contact',
  };
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;

  constructor(private _el: ElementRef) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let currentSection: string;

    const children = this._el.nativeElement.children[0].children;
    const scrollTop = event.target.scrollTop;
    const parentOffset = event.target.offsetTop;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
        // console.log(element.offsetTop, parentOffset, scrollTop);
        if (element.offsetTop - parentOffset <= scrollTop) {
          currentSection = this.ids[element.tagName];
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}
