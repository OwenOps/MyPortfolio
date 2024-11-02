import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor(private readonly router : Router) {}

  goToAPage(route: string): void {
    this.router.navigate([route]);
  }
}
