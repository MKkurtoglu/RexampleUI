import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car.service';
import { CarDTO } from '../../../models/carDTO';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

/**
 *
 */
constructor(private carService: CarService) {
  
  
}

  transform(value: CarDTO[], textFilter: string): CarDTO[] {
    if (!textFilter || textFilter.trim() === '') {
      return value;
    }

    // Text input varsa, markaya göre filtrele
    textFilter = textFilter.toLocaleLowerCase();
    
    return value.filter((p: CarDTO) => 
      p.brandName.toLocaleLowerCase().includes(textFilter)
    );
  }
  }


