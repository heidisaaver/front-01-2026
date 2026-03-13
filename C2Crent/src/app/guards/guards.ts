// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { AuthService } from '../services/auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject (AuthService);
//   const router = inject(Router)
//   const isToken = authService.isLoggedIn.value;

//   if(isToken === false) {
//     router.navigateByUrl("/login");
//   }

//   return isToken
// };
