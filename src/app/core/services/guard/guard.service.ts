import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { UserStateService } from '../user-state/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor
    (
      private readonly router: Router,
      private readonly userStateService: UserStateService,
      private readonly storageService: StorageService
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isSinglePage = this.storageService.getIsSingleMode();
    const status = route.params['isPro'];
    const isAdmin = this.storageService.isAdmin();

    if (!this.handleAccessStatus(status, isAdmin, state, isSinglePage)) {
      return false;
    }

    if (isSinglePage && !state.url.startsWith("/portfolio")) {
      this.router.navigate([`/portfolio/${status}`]);
      return false;
    }

    return true;
  }

  private handleAccessStatus(
    status: any,
    isAdmin: boolean,
    state: RouterStateSnapshot,
    isSinglePage: boolean
  ): boolean {
    if (isAdmin) {
      this.storageService.saveIsAdmin();
      this.userStateService.setIsUserAdmin(isAdmin);
      return true;
    }

    if (status !== 'true' && status !== 'false') {
      this.storageService.saveIsPro(true);
      this.userStateService.setIsPro(true);
      const redirect = isSinglePage ? '/portfolio/true' : '/home/true';
      this.router.navigate([redirect]);
      return false;
    }

    const prevPro = this.storageService.getIsPro();
    if (prevPro == null) {
      this.storageService.saveIsPro(status);
      this.userStateService.setIsPro(status);
      return true;
    }

    if (prevPro !== status) {
      const currentUrl = state.url.split('/')[1];
      const redirect = isSinglePage ? `/portfolio/${prevPro}` : `/${currentUrl}/${prevPro}`;
      this.router.navigate([redirect]);
      return false;
    }

    this.storageService.saveIsPro(status);
    this.userStateService.setIsPro(status);

    return true;
  }
}
