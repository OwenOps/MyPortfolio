import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { UtilitiesService } from '../utilities/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor
    (
      private readonly router: Router,
      private readonly utilities: UtilitiesService
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAdmin = window.localStorage.getItem('adm');
    const status = route.params['isPro']

    if (isAdmin) {
      this.utilities.setProToStorage(status);
      return true;
    }

    if (status !== 'true' && status !== 'false') {
      this.utilities.setProToStorage('true');
      this.router.navigate(['/home/true']);
      return false;
    }

    const prevPro = this.utilities.getProFromStorage();
    if (prevPro == null) {
      this.utilities.setProToStorage(status);
      return true;
    }

    if (prevPro !== status) {
      const currentUrl = state.url.split('/')[1];
      this.router.navigate([`/${currentUrl}/${prevPro}`]);
      return false;
    }

    this.utilities.setProToStorage(status);

    return true;
  }
}
