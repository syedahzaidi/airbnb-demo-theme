import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { BookingBarComponent } from './main/booking-bar/booking-bar.component';
import { FilterComponent } from './main/layout/filter/filter.component';
import { LayoutComponent } from './main/layout/layout.component';
import { SideBarComponent } from './main/layout/side-bar/side-bar.component';
import { HouseListComponent } from './main/layout/house-list/house-list.component';
import { HouseDetailsComponent } from './main/layout/house-details/house-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    BookingBarComponent,
    FilterComponent,
    LayoutComponent,
    SideBarComponent,
    HouseListComponent,
    HouseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
