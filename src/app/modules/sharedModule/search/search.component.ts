import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { ColorService } from '../../../services/color.service';
import { Brand } from '../../../models/brand';
import { Color } from '../../../models/color';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  /**
   *
   */
  constructor(private brandService: BrandService,private colorservice:ColorService) {
    
    
  }
  ngOnInit(): void {
    this.getBrand();
this.getColor();
console.log(this.selectedBrand)
  }
  @Output() textFilterChanged = new EventEmitter<string>();
  @Output() selectedBrandChanged = new EventEmitter<string>();
  @Output() selectedColorChanged = new EventEmitter<string>();

  textFilter: string = '';
  selectedBrand: string | null = null;
  selectedColor: string | null = null;
  brandList:Brand[];
  colorList:Color[];
  onTextFilterChange() {
    this.textFilterChanged.emit(this.textFilter);
  }

  onBrandChange() {
    this.selectedBrandChanged.emit(this.selectedBrand);
  }

  onColorChange() {
    this.selectedColorChanged.emit(this.selectedColor);
  }


  getBrand(){
    this.brandService.getProducts().subscribe(response=>{
      this.brandList=response.data;
      
    })
  }
  
  getColor(){
    this.colorservice.getAllColor().subscribe(response=>{
      this.colorList = response.data;
      
    })
  }
}
