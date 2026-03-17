import { Component, HostListener } from '@angular/core';

interface Service {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
  standalone: false
})
export class ServicesSectionComponent {

  services: Service[] = [
    { image: 'assets/Images/services/full-stack2.png', title: 'Full-Stack Web Development', description: 'Design and develop scalable web applications using Angular and .NET.' },
    { image: 'assets/Images/services/dashboard2.png', title: 'Dashboard & Admin Panels', description: 'Build dynamic dashboards for data management and visualization.' },
    { image: 'assets/Images/services/landing-page.png', title: 'Landing Page Development', description: 'Create engaging landing pages for marketing and conversion purposes.' },
    { image: 'assets/Images/services/register.png', title: 'Login & Registration Systems', description: 'Develop secure login, registration, and user management pages.' },
    { image: 'assets/Images/services/backend-database.png', title: 'Backend & Database Solutions', description: 'Setup SQL databases, REST APIs, and backend integration.' },
    // { image: 'assets/Images/services/project-development.jpg', title: 'Complete Project Development', description: 'End-to-end project delivery from concept to deployment.' }
  ];

  currentIndex = 0;
  itemsPerView = 3;
  isMobile = false;

  ngOnInit() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 768;

    if (this.isMobile) {
      this.itemsPerView = this.services.length;
    } else {
      this.itemsPerView = 3;
    }
  }

  nextSlide() {
    if (this.currentIndex < this.services.length - this.itemsPerView) {
      this.currentIndex++;
    }
  }

  previousSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get transformValue() {
    return `translateX(-${this.currentIndex * (100 / this.itemsPerView)}%)`;
  }


  contactWhatsApp(service: Service) {

  const phone = "201111048402"; // رقمك بدون +

  const message =
`السلام عليكم يا بشمهندس أسامة
أنا مهتم بخدمة:

${service.title}

الوصف:
${service.description}

ممكن نتكلم عن التفاصيل؟`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
}

}
