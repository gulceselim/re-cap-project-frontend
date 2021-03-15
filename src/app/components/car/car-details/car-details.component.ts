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

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getCarDetails(params['carId']);
    });
  }

  getCarDetails(carId: number) {
    this.carService.getCarsDetails(carId).subscribe((response) => {
      this.cars = response.data;
    });
  }
}
