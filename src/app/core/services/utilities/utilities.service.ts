import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  private isPro: boolean = false

  constructor(private readonly router: Router) { }

  goToAPage(route: string): void {
    this.router.navigate([route]);
  }

  setItemToStorage(itemKey: string, itemVal: string) {
    window.localStorage.setItem(itemKey, itemVal);
  }

  setProToStorage(itemVal: string) {
    window.localStorage.setItem('pro', itemVal);
    this.isPro = itemVal == 'true';
  }

  getProFromStorage() {
    return window.localStorage.getItem('pro');
  }

  getIsPro() {
    return this.isPro;
  }
}
