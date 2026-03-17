import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { routes } from './app.routes';


@NgModule({
  imports: [

    BrowserModule,
    RouterOutlet,
    SharedModule,
    FeaturesModule,
    RouterModule.forRoot(routes), // 👈 مهم جداً

],
  declarations: [
    AppComponent,

  ],
   bootstrap: [AppComponent]
})
export class AppModule { }
