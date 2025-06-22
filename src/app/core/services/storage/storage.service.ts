import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly PRO_KEY = 'APP_IS_PRO';
  private readonly ADMIN_KEY = 'APP_IS_ADMIN';
  private readonly PHONE_MODE_KEY = 'APP_IS_PHONE';
  private readonly SINGLE_MODE_KEY = 'APP_IS_SINGLE';

  saveIsPro(val: boolean): void {
    localStorage.setItem(this.PRO_KEY, val ? 'true' : 'false');
  }

  // We want a string because if its the firstTime, the value is NULL
  getIsPro(): string | null {
    return localStorage.getItem(this.PRO_KEY);
  }

  getIsPhoneMode(): boolean {
    return localStorage.getItem(this.PHONE_MODE_KEY) == 'true';
  }

  getIsSingleMode(): boolean {
    return localStorage.getItem(this.SINGLE_MODE_KEY) == 'true';
  }

  saveIsAdmin(): void {
    localStorage.setItem(this.ADMIN_KEY, 'true');
  }

  saveIsPhoneMode(val: boolean): void {
    localStorage.setItem(this.PHONE_MODE_KEY, val ? 'true' : 'false');
  }

  saveIsSinglePage(val: boolean): void {
    localStorage.setItem(this.SINGLE_MODE_KEY, val ? 'true' : 'false');
  }

  isAdmin(): boolean {
    return localStorage.getItem(this.ADMIN_KEY) === 'true';
  }

  setItemToStorage(itemKey: string, itemVal: string): void {
    localStorage.setItem(itemKey, itemVal);
  }
}
