import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameComponent } from './name/name.component';
import { AdminComponent } from '../admin/admin/admin.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NameComponent, AdminComponent],
  exports: [NameComponent, AdminComponent]
})
export class SharedModule { }