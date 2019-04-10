import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { DataService } from './shared/data.service';
import { EventListResolver } from './events-list.resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './shared/weather.service';
import { TemperatureComponent } from './home/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventCreateComponent,
    EventDetailsComponent,
    HeaderComponent,
    FooterComponent,
    TemperatureComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [DataService, EventListResolver, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
