import { CarImage } from './../../../models/carImage';
import { CarImageService } from './../../../services/car-image.service';
import { CreditCard } from './../../../models/creditCard';
import { CreditCardService } from './../../../services/credit-card.service';
import { AuthService } from './../../../services/auth.service';
import { UserService } from './../../../services/user.service';
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
  creditCards: CreditCard[];
  creditCardId: number;
  currentUserId: number;
  carsForRent: CarDetails[];
  carImages: CarImage[];
  colors: Color[];
  brands: Brand[];
  filterText: string = '';
  dataLoaded: boolean = false;
  brandSelected: string = '';
  colorSelected: string = '';
  filterBrandColor: string[];
  rentDate: Date;
  returnDate: Date;
  addRent: Rent;
  control: boolean = false;
  imagePath: string;

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private rentService: RentService,
    private customerService: CustomerService,
    private userService: UserService,
    private authService: AuthService,
    private creditCardService: CreditCardService,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.getCarImages();
    this.getCurrentUser();
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

  getCreditCardByUserId(currentUserId: number) {
    this.creditCardService
      .getAllByUserId(currentUserId)
      .subscribe((response) => {
        this.creditCards = response.data;
        if (this.creditCards.length > 0) {
          this.control = true;
        }
      });
  }

  getCurrentUser() {
    this.userService
      .getUserByEmail(this.authService.getEmail())
      .subscribe((response) => {
        this.currentUserId = response.data.id;
        this.getCreditCardByUserId(this.currentUserId);
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

  getCarImages() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarImageById(carId: number): string {
    let imagePath = '';
    this.carImages.forEach((car) => {
      if (car.carId == carId) {
        imagePath = 'https://localhost:44397' + car.imagePath;
      }
    });
    return imagePath;
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

  setClear() {
    this.filterBrandColor = [];
    this.filterBrandColor.push('', '');
    this.colorSelected = 'Renk';
    this.brandSelected = 'Marka';
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
