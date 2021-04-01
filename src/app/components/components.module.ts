import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavComponent, CategoryComponent],
  exports: [NavComponent, CategoryComponent],
})
export class ComponentsModule {}
