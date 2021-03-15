import { CarDetailsComponent } from './components/car/car-details/car-details.component';
import { UserComponent } from './components/user/user.component';
import { RentComponent } from './components/rent/rent.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CarComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'rent',
    component: RentComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'cars/color/:colorId',
    component: CarDetailsComponent,
  },
  {
    path: 'cars/brand/:brandId',
    component: CarDetailsComponent,
  },
  {
    path: 'cars/details/:carId',
    component: CarDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
