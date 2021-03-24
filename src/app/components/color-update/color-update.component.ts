import { Color } from './../../models/color';
import { ColorService } from './../../services/color.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css'],
})
export class ColorUpdateComponent implements OnInit {
  colors: Color[] = [];
  colorName: Color;
  id: Color;
  colorUpdateForm: FormGroup;

  constructor(
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createColorUpdateForm();

    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getColorById(params['colorId']);
      }
    });
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      id: [this.id, Validators.required],
      colorName: [this.colorName, Validators.required],
    });
  }

  getColorById(colorId: number) {
    this.colorService.getColorById(colorId).subscribe((response) => {
      this.colors = response.data;
      Object.keys(this.colors).forEach((c: any) => {
        if (c == 'id') {
          this.id = this.colors[c];
        } else {
          this.colorName = this.colors[c];
        }
      });
      this.createColorUpdateForm();
    });
  }

  update() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      this.colorService.update(colorModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı');
      });
    }
  }
}
