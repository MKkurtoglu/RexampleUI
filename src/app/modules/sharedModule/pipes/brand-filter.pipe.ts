import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../../../models/brand';
import { CarDTO } from '../../../models/carDTO';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: CarDTO[], selectedBrand: string | null): CarDTO[] {
    if (!selectedBrand || selectedBrand.trim() === '' || selectedBrand==="null") {
      // Eğer selectedBrand null, undefined ya da boş ise tüm veriyi döndür
      return value;
    }
    
    // Marka seçilmişse, marka adını filtrele
    return value.filter(car =>
      car.brandName.toLocaleLowerCase().includes(selectedBrand.toLocaleLowerCase())
    );
  }

}
