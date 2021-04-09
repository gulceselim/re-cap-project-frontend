import { Car } from './../../models/car';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from './../../services/brand.service';
import { Brand } from './../../models/brand';
import { Color } from './../../models/color';
import { ColorService } from './../../services/color.service';
import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm: FormGroup;
  car: Car;

  carId: number;
  modelYear: string;
  dailyPrice: number;
  descriptions: string;
  brandId: number;
  colorId: number;
  id: number;
  colors: Color[];
  brands: Brand[];

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId = params['carId'];
        this.getCarById(params['carId']);
        this.createCarUpdateForm();
      }
    });
  }

  createCarUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      id: [this.id, Validators.required],
      modelYear: [this.modelYear ? this.modelYear : '', Validators.required],
      dailyPrice: [this.dailyPrice ? this.dailyPrice : '', Validators.required],
      descriptions: [
        this.descriptions ? this.descriptions : '',
        Validators.required,
      ],
      brandId: [this.brandId ? this.brandId : '', Validators.required],
      colorId: [this.colorId ? this.colorId : '', Validators.required],
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

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = Object.assign({}, response.data);
      this.id = this.car.id;
      this.modelYear = this.car.modelYear;
      this.dailyPrice = this.car.dailyPrice;
      this.descriptions = this.car.descriptions;
      this.brandId = this.car.brandId;
      this.colorId = this.car.colorId;
      this.createCarUpdateForm();
    });
  }

  update() {
    if (this.carUpdateForm.valid) {
      let carModel = Object.assign({}, this.carUpdateForm.value);
      this.carService.update(carModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı');
      });
    }
  }
}
