import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomMaterialModule } from './material/angular-material.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HammerCardComponent } from './hammer/hammer-card/hammer-card.component';
import { CustomHammerConfig } from './hammer/hammer.config';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { HammertimeDirective } from './hammer/hammertime.directive';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HammerCardComponent, HammertimeDirective, AboutComponent, ListComponent, MenuComponent, DemoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
