import { Pipe, PipeTransform } from '@angular/core';
import { CarDTO } from '../../../models/carDTO';
import { Color } from '../../../models/color';
import { CarService } from '../../../services/car.service';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {
/**
 *
 */
constructor(private carService:CarService) {
  
  
}
transform(value: CarDTO[], selectedColor: string): CarDTO[] {
  if (!selectedColor || selectedColor.trim() === '' || selectedColor==="null") {
    // Eğer selectedBrand null, undefined ya da boş ise tüm veriyi döndür
    return value;
  }
  
  // Marka seçilmişse, marka adını filtrele
  return value.filter(car =>
    car.colorName.toLocaleLowerCase().includes(selectedColor.toLocaleLowerCase())
  );
}

}
