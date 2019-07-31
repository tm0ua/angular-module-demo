import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameService } from './services/name.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [NameService]
})
export class CoreModule { }