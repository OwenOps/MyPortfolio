import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { GuardService } from '../core/services/guard/guard.service';

export const StatusGuard: CanActivateFn = (route, state) => {
  return inject(GuardService).canActivate(route, state);
};
