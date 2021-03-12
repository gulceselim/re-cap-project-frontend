import { MaterialModule } from './components/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { UserComponent } from './components/user/user.component';
import { CarComponent } from './components/car/car.component';
import { RentComponent } from './components/rent/rent.component';
import { NavComponent } from './components/nav/nav.component';
import { CategoryComponent } from './components/category/category.component';
import { ColorDialogComponent } from './components/color-dialog/color-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    UserComponent,
    CarComponent,
    RentComponent,
    NavComponent,
    CategoryComponent,
    ColorDialogComponent,
  ],
  entryComponents: [ColorDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
