import { Component, OnInit } from '@angular/core';
import { NameService } from '../../core/services/name.service'

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  nameService: NameService
  name: string
  constructor(nameService: NameService) { 
    this.nameService = nameService
  }

  ngOnInit() {
    this.name = this.nameService.getName('Denver')
  }

}