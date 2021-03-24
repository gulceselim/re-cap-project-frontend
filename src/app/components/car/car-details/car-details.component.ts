import { Customer } from './../../../models/customer';
import { CustomerService } from './../../../services/customer.service';
import { ListResponseModel } from './../../../models/listResponseModel';
import { Rent } from './../../../models/rent';
import { RentService } from './../../../services/rent.service';
import { Brand } from './../../../models/brand';
import { Color } from './../../../models/color';
import { BrandService } from './../../../services/brand.service';
import { ColorService } from './../../../services/color.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from './../../../models/carDetails';
import { CarService } from './../../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  cars: CarDetails[];
  customers: Customer[];
  customerId: number;
  carsForRent: CarDetails[];
  colors: Color[];
  brands: Brand[];
  filterText: string = '';
  dataLoaded: boolean = false;
  brandSelected: string = '';
  colorSelected: string = '';
  filterBrandColor: string[];
  rentDate: Date;
  returnDate: Date;
  addRent: ListResponseModel<Rent>;

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private rentService: RentService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    this.getCustomer();
    this.getCarsDetails();
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['carId']) {
        this.getCarsDetailsByCar(params['carId']);
      }
    });
  }

  getCarsDetailsByCar(carId: number) {
    this.carService.getCarsDetailsByCar(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCustomer() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }

  rentACar(car: CarDetails) {
    let rental: Rent = {
      carId: car.carId,
      customerId: 1,
      returnDate: this.returnDate,
      rentDate: this.rentDate,
    };
    this.rentService.addRent(rental).subscribe((response) => {
      //this.addRent = response;
      if (this.addRent.success) {
        this.toastrService.success(this.addRent.message, car.brandName);
      } else {
        this.toastrService.error(this.addRent.message, car.brandName);
      }
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  currentBrand(brand: Brand) {
    this.brandSelected = brand.brandName;
  }

  currentColor(color: Color) {
    this.colorSelected = color.colorName;
  }

  currentCarForRent(carId: number) {
    this.carService.getCarsDetailsByCar(carId).subscribe((response) => {
      this.carsForRent = response.data;
    });
  }

  setFilter() {
    this.filterBrandColor = [];
    this.filterBrandColor.push(this.colorSelected, this.brandSelected);
  }

  getRentMinDate() {
    var today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().slice(0, 10);
  }
  getReturnMinDate() {
    var today = new Date();
    today.setDate(today.getDate() + 2);
    return today.toISOString().slice(0, 10);
  }
}
