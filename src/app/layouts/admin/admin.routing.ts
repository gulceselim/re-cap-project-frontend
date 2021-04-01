import { ColorUpdateComponent } from './../../components/color-update/color-update.component';
import { BrandUpdateComponent } from './../../components/brand-update/brand-update.component';
import { LoginGuard } from './../../guards/login.guard';
import { CarAddComponent } from './../../components/car-add/car-add.component';
import { BrandAddComponent } from './../../components/brand-add/brand-add.component';
import { ColorAddComponent } from './../../components/color-add/color-add.component';
import { UserComponent } from './../../components/user/user.component';
import { RentComponent } from './../../components/rent/rent.component';
import { ColorComponent } from './../../components/color/color.component';
import { CarDetailsComponent } from './../../components/car/car-details/car-details.component';
import { BrandComponent } from './../../components/brand/brand.component';
import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'car',
    component: CarDetailsComponent,
    canActivate: [LoginGuard],
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
  {
    path: 'colors/add',
    component: ColorAddComponent,
  },
  {
    path: 'brands/add',
    component: BrandAddComponent,
  },
  {
    path: 'cars/add',
    component: CarAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'colors/update/:colorId',
    component: ColorUpdateComponent,
  },
  {
    path: 'brands/update/:brandId',
    component: BrandUpdateComponent,
  },
];
