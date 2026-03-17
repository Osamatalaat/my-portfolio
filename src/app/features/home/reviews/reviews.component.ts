import { Component, HostListener, OnInit } from '@angular/core';

interface Review {
  image: string;
  name: string;
  role?: string;
  comment: string;
  rating: number;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  standalone: false,
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [
    {
      image: 'assets/Images/Reviews/Mahmoud-Nour.jpg',
      name: 'Mahmoud Nour',
      role: 'Full Stack Developer & WordPress Expert',
      comment: 'Osama delivered an excellent website.',
      rating: 5,
    },
    {
      image: 'assets/Images/Reviews/Mahmoud-Abdo.jpg',
      name: 'Mahmoud Abdo',
      role: 'Full Stack Developer & WordPress Expert',
      comment: 'Very professional developer.',
      rating: 4.5,
    },
    {
      image: 'assets/Images/Reviews/Basmaa.jpg',
      name: 'Basmaa Shaaban',
      role: 'Product Manager',
      comment: 'Great experience working together.',
      rating: 5,
    },
    {
      image: 'assets/Images/Reviews/Mahmoud-Sayed.jpg',
      name: 'Mahmoud Sayed',
      role: 'Graduated ITI Full Stack Developer',
      comment: 'Excellent quality work.',
      rating: 5,
    },
    {
      image: 'assets/Images/Reviews/Ahmed-Shams.png',
      name: 'Mohamed Sayed',
      role: 'Front-end developer @Roboost',
      comment: 'Highly recommended.',
      rating: 5,
    },
  ];
  direction: 'forward' | 'backward' = 'forward';
  intervalId: any;
  currentIndex = 0;
  itemsPerView = 3;
  isMobile = false;

  ngOnInit() {
  this.checkScreen();
  this.startAutoSlide();
}


startAutoSlide() {
  this.intervalId = setInterval(() => {

    if (this.direction === 'forward') {
      if (this.currentIndex < this.reviews.length - this.itemsPerView) {
        this.currentIndex++;
      } else {
        this.direction = 'backward'; // يعكس الاتجاه
      }
    } else {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.direction = 'forward'; // يرجع تاني
      }
    }

  }, 1000); // السرعة (كل 2 ثانية)
}


ngOnDestroy() {
  clearInterval(this.intervalId);
}
  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 768;
    this.itemsPerView = this.isMobile ? this.reviews.length : 3;
  }

  nextSlide() {
    if (this.currentIndex < this.reviews.length - this.itemsPerView) {
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

  // ⭐ الحل هنا
  getStars(rating: number): string[] {
    const stars: string[] = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push('full');
      } else if (rating >= i - 0.5) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }

    return stars;
  }
}
