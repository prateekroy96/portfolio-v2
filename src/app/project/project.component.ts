import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faBriefcase,
  faAddressCard,
  faEnvelopeOpenText,
  faEnvelope,
  faCode,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  work: any = faBriefcase;
  code: any = faCode;
  link: any = faExternalLinkAlt;
  list: Project[];
  constructor() {
    this.list = [
      {
        title: 'Weather App',
        image: './assets/images/weather-monitor.png',
        description: 'TBD...',
        github: 'https://github.com/prateekroy96/Weather-Web-App',
        link: 'https://github.com/prateekroy96/Weather-Web-App',
        stack: 'Angular, Bootstrap, Node.js, NestJS, MongoDB',
      },
      {
        title: 'Police Record Management',
        image: './assets/images/mpp-monitor.png',
        description:
          'Management of Police Station Records, additionally uses facial recognition to search through the records of criminals, missing and found children.',
        github: '',
        link: '',
        stack: 'Angular, Materialize CSS, Node.js, Express, MySQL',
      },
      {
        title: 'Attendance Management System',
        image: './assets/images/ams-monitor.png',
        description:
          'An application to take and manage attendance via facial recognition of employees',
        github: '',
        link: '',
        stack: 'Angular, Bootstrap, Node.js, Express, MySQL',
      },
    ].reverse();
  }

  ngOnInit(): void {}

  codeClick(item: Project) {
    if (!item.github) return;
    window.open(item.github, '_blank');
  }
  linkClick(item: Project) {
    if (!item.link) return;
    window.open(item.link, '_blank');
  }
}

export class Project {
  title: string;
  image: string;
  description: string;
  github: string;
  link: string;
  stack: string;
}
