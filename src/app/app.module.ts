import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { UserComponent } from './components/user/user.component';
import { CarComponent } from './components/car/car.component';
import { RentComponent } from './components/rent/rent.component';
import { NavComponent } from './components/nav/nav.component';
import { CategoryComponent } from './components/category/category.component';
import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { FilterCarPipePipe } from './pipes/filter-car-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { FilterCarDetailPipePipe } from './pipes/filter-car-detail-pipe.pipe';
import { FilterColorBrandPipe } from './pipes/filter-color-brand.pipe';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';

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
    CarDetailsComponent,
    FilterCarPipePipe,
    FilterColorPipePipe,
    FilterBrandPipePipe,
    FilterCarDetailPipePipe,
    FilterColorBrandPipe,
    ColorAddComponent,
    BrandAddComponent,
    CarAddComponent,
    ColorUpdateComponent,
    BrandUpdateComponent,
    CarUpdateComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
