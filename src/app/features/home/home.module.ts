import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { EducationsComponent } from './educations/educations.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroSectionComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    ContactComponent,
    ServicesSectionComponent,
    EducationsComponent,
    ReviewsComponent,
    HomeComponent
  ]
})
export class HomeModule { }
