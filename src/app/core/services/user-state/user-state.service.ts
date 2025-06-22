import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private readonly _isPro = signal<boolean>(false);
  private readonly _isUserAdmin = signal<boolean>(false);
  private readonly _isSinglePage = signal<boolean>(false);

  private readonly _isPhoneMode = signal<boolean>(false); // Its the preferences mode
  private readonly _isPhoneSize = signal<boolean>(false); // Its the real phone size

  getIsPro(): Signal<boolean> {
    return this._isPro.asReadonly();
  }

  getIsUserAdmin(): Signal<boolean> {
    return this._isUserAdmin.asReadonly();
  }

  getIsPhoneMode(): Signal<boolean> {
    return this._isPhoneMode.asReadonly();
  }

  getIsPhoneSize(): Signal<boolean> {
    return this._isPhoneSize.asReadonly();
  }

  getIsSinglePage(): Signal<boolean> {
    return this._isSinglePage.asReadonly();
  }

  setIsPro(value: boolean) {
    this._isPro.set(value);
  }

  setIsUserAdmin(value: boolean) {
    this._isUserAdmin.set(value);
  }

  setIsPhoneMode(value: boolean) {
    this._isPhoneMode.set(value);
  }

  setIsPhoneSize(value: boolean) {
    this._isPhoneSize.set(value);
  }

  setIsSinglePage(value: boolean) {
    this._isSinglePage.set(value);
  }
}
