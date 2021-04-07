import { CreditCardService } from './../../services/credit-card.service';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.css'],
})
export class CreditCardAddComponent implements OnInit {
  creditCardAddForm: FormGroup;
  currentUserId: number;

  constructor(
    private FormBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService,
    private authService: AuthService,
    private creditCardService: CreditCardService
  ) {}

  ngOnInit(): void {
    this.createCreditCardAddForm();
    this.getCurrentUser();
  }

  createCreditCardAddForm() {
    this.creditCardAddForm = this.FormBuilder.group({
      userId: [this.currentUserId, Validators.required],
      cardNumber: ['', Validators.required],
      fullName: ['', Validators.required],
      CCV: ['', Validators.required],
      expirationMonth: ['', Validators.required],
      expirationYear: ['', Validators.required],
    });
  }

  getCurrentUser() {
    this.userService
      .getUserByEmail(this.authService.getEmail())
      .subscribe((response) => {
        this.currentUserId = response.data.id;
        this.createCreditCardAddForm();
      });
  }

  add() {
    if (this.creditCardAddForm.valid) {
      let creditCardModel = Object.assign({}, this.creditCardAddForm.value);
      this.creditCardService.add(creditCardModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı!');
      });
    }
  }
}
