import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  standalone: false
})
export class HeroSectionComponent implements AfterViewInit {
    @ViewChild('typewriter', { static: true }) typewriterEl!: ElementRef<HTMLElement>;


 phrases: string[] = [
    "Hi, I'm Osama Full-Stack Developer",
    "I build scalable web applications",
    "I love Angular, .NET, and modern tech"
  ];

  async typeWriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    while (true) {
      for (const phrase of this.phrases) {
        await this.typeText(el, phrase);
        await this.sleep(1500);
        await this.deleteText(el);
        await this.sleep(500);
      }
    }
  }

  typeText(el: HTMLElement, text: string) {
    return new Promise<void>((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        el.textContent = text.slice(0, i + 1);
        i++;
        if (i === text.length) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }

  deleteText(el: HTMLElement) {
    return new Promise<void>((resolve) => {
      let text = el.textContent || '';
      let i = text.length;
      const interval = setInterval(() => {
        el.textContent = text.slice(0, i - 1);
        i--;
        if (i === 0) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
    });
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngAfterViewInit(): void {
    this.typeWriter();
  }
}


