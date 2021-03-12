import { ColorDialogComponent } from './../color-dialog/color-dialog.component';
import { ColorService } from './../../services/color.service';
import { Color } from './../../models/color';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];

  constructor(private colorService: ColorService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getColors();
  }

  deleteColor() {
    this.dialog.open(ColorDialogComponent);
  }

  updateColor() {
    this.dialog.open(ColorDialogComponent);
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
