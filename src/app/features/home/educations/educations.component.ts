import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

interface Educations {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css'],
  standalone: false
})
export class EducationsComponent implements AfterViewInit {

  @ViewChild('timeline') timeline!: ElementRef;

  educationList: Educations[] = [
    {
      year: '2020',
      title: 'Engineering Faculty',
      description: 'Started studying Electronics Engineering'
    },
    {
      year: '2023',
      title: 'Network Training - NTI',
      description: 'Network administration and cybersecurity training'
    },
    {
      year: '2024',
      title: 'Graduation - Engineering Faculty',
      description: 'Completed my degree in Electronics and Communication Engineering'
    },
    {
      year: '2025',
      title: 'Professional Full Stack Web Development Training - ITI',
      description: 'Angular, .NET, SQL, and modern web technologies'
    }
  ];

  ngAfterViewInit() {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add('animate-line');
        }

      });

    }, { threshold: 0.5 });

    observer.observe(this.timeline.nativeElement);

  }

}
