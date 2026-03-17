import { Component } from '@angular/core';

interface Work {
  title: string;
  description: string;
  technologies: string[];
  picture: string;
  githubLink: string;
  liveLink: string;
  videoLink?: string; // optional
}

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  standalone: false,
})
export class WorksComponent {
  works: Work[] = [
    {
      title: 'Oxford  Website',
      description: 'A modern University website with online ordering features.',
      technologies: ['HTML', 'CSS', 'Angular', 'TypeScript'],
      picture: 'assets/Images/oxfordCover.png',
      githubLink: 'https://github.com/Osamatalaat/oxfordwebsite',
      liveLink: 'https://oxfordwebsite-web.vercel.app/',
      videoLink: 'https://www.youtube.com/watch?v=GblvVLwhof4',
    },
    {
      title: 'Qabs Academy Website',
      description: 'Full-stack Academy website with payment integration.',
      technologies: [
        'Angular',
        '.NET',
        'ASP.NET Core',
        'SQL Server',
        'Entity Framework',
      ],
      picture: 'assets/Images/QabsCover.png',
      githubLink: 'https://github.com/osama/ecommerce',
      liveLink: '',
      videoLink: 'https://www.youtube.com/watch?v=jzXqScR_UA8',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills.',
      technologies: ['HTML', 'CSS', 'Angular','TypeScript', 'TailwindCSS'],
      picture: 'assets/Images/profile.png',
      githubLink: 'https://github.com/osama/portfolio',
      liveLink: 'https://osamatallat-portfolio.vercel.app/',
    },

  ];

  showAll: boolean = false; // هل نعرض كل الكروت؟

  get displayedWorks(): Work[] {
    return this.showAll ? this.works : this.works.slice(0, 3);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
