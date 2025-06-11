import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    // 👉 Optional: ตรวจสอบ token หมดอายุหรือไม่
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expired = payload.exp * 1000 < Date.now();
      if (!expired) return true;
    } catch (e) {
      console.error('Invalid token:', e);
    }
  }

  // Redirect ไปหน้า login
  router.navigate(['/auth/login'], {
    queryParams: { returnUrl: state.url.split('?')[0] }
  });

  return false;
};

