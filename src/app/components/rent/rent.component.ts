import { Rent } from './../../models/rent';
import { RentService } from './../../services/rent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  rents: Rent[] = [];
  dataLoaded: boolean = false;

  constructor(private rentService: RentService) {}

  ngOnInit(): void {
    this.getRents();
  }

  getRents() {
    this.rentService.getRents().subscribe((response) => {
      this.rents = response.data;
    });
  }
}
