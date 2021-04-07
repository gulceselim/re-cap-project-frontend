import { Rent } from './../../models/rent';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { CreditCardService } from './../../services/credit-card.service';
import { CreditCard } from './../../models/creditCard';
import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service';
import { RentService } from './../../services/rent.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rent-add',
  templateUrl: './rent-add.component.html',
  styleUrls: ['./rent-add.component.css'],
})
export class RentAddComponent implements OnInit {
  rentAddForm: FormGroup;
  customers: Customer[];
  creditCards: CreditCard[];
  creditCardId: number;
  control: boolean = false;
  currentUserId: number;
  carId: number;
  customerId: number;

  constructor(
    private formBuilder: FormBuilder,
    private rentService: RentService,
    private toastrService: ToastrService,
    private customerService: CustomerService,
    private creditCardService: CreditCardService,
    private userService: UserService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomers();
    this.getCurrentUser();
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId = parseInt(params['carId']);
        this.createRentAddForm();
      }
    });
  }

  createRentAddForm() {
    this.rentAddForm = this.formBuilder.group({
      carId: [this.carId, Validators.required],
      customerId: ['', Validators.required],
      returnDate: ['', Validators.required],
      rentDate: ['', Validators.required],
    });
  }

  rent() {
    if (this.rentAddForm.valid) {
      let rentModel = Object.assign({}, this.rentAddForm.value);

      this.rentService.add(rentModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
        },
        (responseError) => {
          this.toastrService.error(responseError.error.message);
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat!');
    }
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }

  getCustomerById() {}

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
}
