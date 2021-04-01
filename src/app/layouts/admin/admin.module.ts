import { SliderComponent } from './../../components/slider/slider.component';
import { BrandUpdateComponent } from './../../components/brand-update/brand-update.component';
import { ColorUpdateComponent } from './../../components/color-update/color-update.component';
import { CarAddComponent } from './../../components/car-add/car-add.component';
import { BrandAddComponent } from './../../components/brand-add/brand-add.component';
import { ColorAddComponent } from './../../components/color-add/color-add.component';
import { UserComponent } from './../../components/user/user.component';
import { RentComponent } from './../../components/rent/rent.component';
import { ColorComponent } from './../../components/color/color.component';
import { CarDetailsComponent } from './../../components/car/car-details/car-details.component';
import { BrandComponent } from './../../components/brand/brand.component';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminRoutes } from './admin.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterCarPipePipe } from '../../pipes/filter-car-pipe.pipe';
import { FilterColorPipePipe } from '../../pipes/filter-color-pipe.pipe';
import { FilterBrandPipePipe } from '../../pipes/filter-brand-pipe.pipe';
import { FilterCarDetailPipePipe } from '../../pipes/filter-car-detail-pipe.pipe';
import { FilterColorBrandPipe } from '../../pipes/filter-color-brand.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SliderComponent,
    BrandComponent,
    CarDetailsComponent,
    ColorComponent,
    RentComponent,
    UserComponent,
    CarDetailsComponent,
    ColorAddComponent,
    BrandAddComponent,
    CarAddComponent,
    ColorUpdateComponent,
    BrandUpdateComponent,
    FilterCarPipePipe,
    FilterColorPipePipe,
    FilterBrandPipePipe,
    FilterCarDetailPipePipe,
    FilterColorBrandPipe,
  ],
})
export class AdminModule {}
