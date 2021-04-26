import { Component, OnInit } from '@angular/core';
// import {
//   faWrench,
//   faAddressCard,
//   faPen,
//   faGraduationCap,
//   faChartBar,
//   faStar,
//   faChartLine,
//   faRocket,
//   faLaptop,
//   faLightbulb,
//   faCogs,
//   faFile,
//   faFileDownload,
//   faFilePdf,
// } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  multi: any = [];
  readonly totalExp: number = 26;
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = false;
  legendPosition: string = 'below';
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Language / Framework';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Months';
  showGridLines = false;
  view = [450, 400];
  colorScheme = {
    domain: ['rgb(37, 157, 174)', 'rgb(92, 237, 254)'],
  };
  customColors: any = [];
  schemeType: string = 'linear';

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  // chart - end
  // about: any = faAddressCard;
  // educationIcon: any = faChartBar;
  // skillIcon: any = faStar;
  // expIcon: any = faChartLine;
  // info: any = faFile;
  // doc: any = faFileDownload;
  // pdf: any = faFilePdf;
  jobStart: Date = new Date('2019-11-01');
  today: Date = new Date();
  offers: any[] = [
    {
      icon: 'fa-rocket',
      title: 'Fast',
      description:
        'Fast load times and lag free interaction, my highest priority.',
    },
    {
      icon: 'fa-laptop',
      title: 'Responsive',
      description: 'My layouts will work on any device, big or small.',
    },
    {
      icon: 'fa-exclamation',
      title: 'Intuitive',
      description: 'Strong preference for easy to use, intuitive UX/UI.',
    },
    {
      icon: 'fa-cogs',
      title: 'Dynamic',
      description:
        "Websites don't have to be static, I love making pages come to life.",
    },
  ];
  images: any[] = [
    {
      name: 'HTML',
      url: '/assets/images/html.png',
    },
    {
      name: 'CSS',
      url: '/assets/images/css.png',
    },
    {
      name: 'Angular',
      url: '/assets/images/angular.png',
    },
    {
      name: 'NodeJS',
      url: '/assets/images/node.png',
    },
    {
      name: 'Python',
      url: '/assets/images/python.png',
    },
    {
      name: 'SQL',
      url: '/assets/images/mysql.png',
    },
    {
      name: 'MongoDB',
      url: '/assets/images/mongo.png',
    },
  ];
  bio: string[] = [
    "I'm a Full-Stack Developer based in Delhi, currently working for Beadcore Infotech in Noida, UP.",
    'I have serious passion for UI effects, animations as well as creating a better user experience.',
  ];

  education: any[] = [
    {
      title: 'Full Stack Developer',
      description: 'at Beadcore InfoTech Pvt. Ltd.',
      date: '2019 - Present',
      score: '',
      percentage: '',
      icon: 'fa-wrench',
    },
    {
      title: 'B. Tech, Civil Engineering',
      description: 'Indian Institute of Technology, Kanpur (IITK)',
      date: '2014 - 2018',
      score: 'CPI: 7.2',
      percentage: '72',
      icon: 'fa-graduation-cap',
    },
    {
      title: 'Senior Secondary',
      description: 'Goodley Public School, Delhi (CBSE)',
      date: '2014',
      score: 'Score: 93.2%',
      percentage: '93',
      icon: 'fa-pencil',
    },
    {
      title: 'Senior',
      description: 'Goodley Public School, Delhi (CBSE)',
      date: '2012',
      score: 'CGPA: 10 ',
      percentage: '100',
      icon: 'fa-pencil',
    },
  ];

  skills: any[] = [
    {
      title: 'HTML',
      pro_exp: 18,
      noob_exp: 8,
      abbr: 'HTML',
    },
    {
      title: 'CSS',
      pro_exp: 12,
      noob_exp: 8,
      abbr: 'CSS',
    },
    {
      title: 'JavaScript',
      pro_exp: 15,
      noob_exp: 7,
      abbr: 'JS',
    },
    {
      title: 'TypeScript',
      pro_exp: 15,
      noob_exp: 3,
      abbr: 'TS',
    },
    {
      title: 'Python',
      pro_exp: 1,
      noob_exp: 3,
      abbr: 'Py',
    },
    {
      title: 'Angular',
      pro_exp: 15,
      noob_exp: 2,
      abbr: 'Ng',
    },
    {
      title: 'React',
      pro_exp: 4,
      noob_exp: 0,
      abbr: 'React',
    },
    {
      title: 'NodeJS',
      pro_exp: 9,
      noob_exp: 5,
      abbr: 'Node',
    },
    {
      title: 'SQL',
      pro_exp: 6,
      noob_exp: 2,
      abbr: 'SQL',
    },
    {
      title: 'MongoDB',
      pro_exp: 8,
      noob_exp: 2,
      abbr: 'Mongo',
    },
  ];
  options: any;
  constructor() {}

  ngOnInit(): void {
    let current = {
      HTML: true,
      CSS: true,
      JavaScript: true,
      TypeScript: true,
      Angular: true,
      NodeJS: true,
    };
    // this.skills.map((skill: any) => {
    //   if (current[skill.title]) {
    //     skill.pro_exp = Math.round(
    //       (this.today.getTime() - this.jobStart.getTime()) / 2592000000
    //     );
    //   }
    //   return skill;
    // });

    this.multi = [];
    for (let skill of this.skills) {
      this.multi.push({
        name: skill.title,
        series: [
          {
            name: 'Work Exp.',
            value: skill.pro_exp,
          },
          {
            name: 'Personal Exp.',
            value: skill.noob_exp,
          },
        ],
      });
    }
  }
  resumeDocClick() {
    let url = window.location.href + '/assets/resume/resume.docx';
    var link = document.createElement('a');
    link.href = url;
    link.download = 'Prateek-resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  resumePdfClick() {
    let url = window.location.href + '/assets/resume/resume.pdf';
    window.open(url, '_blank');
  }
}
