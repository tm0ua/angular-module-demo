import { Injectable } from '@angular/core';

@Injectable()
export class NameService {

  constructor() { }

  getName(name: string): string {
    return `Hello ${name}`
  }
}