import { AuthService } from './../../services/auth.service';
import { Byte } from '@angular/compiler/src/util';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css'],
})
export class ProfileUpdateComponent implements OnInit {
  profileUpdateForm: FormGroup;
  user: User;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: Byte[];
  passwordSalt: Byte[];
  status: boolean;

  constructor(
    private FormBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createProfileForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        this.getUserById(params['userId']);
      }
    });
  }

  createProfileForm() {
    this.profileUpdateForm = this.FormBuilder.group({
      id: [this.id, Validators.required],
      firstName: [this.firstName, Validators.required],
      lastName: [this.lastName, Validators.required],
      email: [this.email, Validators.required],
      passwordHash: [this.passwordHash, Validators.required],
      passwordSalt: [this.passwordSalt, Validators.required],
      status: [this.status, Validators.required],
    });
  }

  getUserById(userId: number) {
    this.userService.getUserById(userId).subscribe((response) => {
      this.user = response.data;
      this.id = this.user.id;
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.email = this.user.email;
      this.passwordHash = this.user.passwordHash;
      this.passwordSalt = this.user.passwordSalt;
      this.status = this.user.status;
      this.createProfileForm();
    });
  }

  update() {
    if (this.profileUpdateForm.valid) {
      let userModel = Object.assign({}, this.profileUpdateForm.value);
      this.userService.update(userModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Success');
      });
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
