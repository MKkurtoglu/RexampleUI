import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { first, map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // login kontrolü
  const toastrService = inject(ToastrService); 
  const router = inject(Router); // login olmaayn kişiyi yönlendirme yapmak içiin 
  
  // ---  route parametresi --- :route parametresini, 
  //kullanıcının erişmeye çalıştığı belirli rota hakkında 
  //bilgi almak için kullanabilirsiniz. Örneğin, belirli bir parametreye göre erişim izni verebilirsiniz.

  
  //  ---  state parametresini  ---  , mevcut rotanın durumunu ve geçmişini anlamak için kullanabilirsiniz. 
  //Örneğin, kullanıcıyı belirli bir rota durumuna göre yönlendirebilir veya farklı işlemler yapabilirsiniz.
  
  
  
  
  
  
//   if(authService.isAuthenticated()){
//     return true
//   }
//   else{
// router.navigate(["login"]);
// toastrService.info("Sisteme Giriş Yapmalısınız..")
// return false
//   }





return authService.isLoggedIn$.pipe(
  first(), // İlk değeri almak için kullanılır
  map(isLoggedIn => {
    if (isLoggedIn) {
      return true; // Kullanıcı giriş yapmışsa erişime izin ver
    } else {
      router.navigate(['login']); // Giriş yapılmamışsa login sayfasına yönlendir
      toastrService.info('Sisteme Giriş Yapmalısınız.');
      return false; // Erişim engellenir
    }
  })
);
};
