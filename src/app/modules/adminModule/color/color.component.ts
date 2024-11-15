import { Component } from '@angular/core';
import { ColorService } from '../../../services/color.service';
import { Color } from '../../../models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent {
  constructor(private colorService:ColorService) {
  
  
  }
    ngOnInit(): void {
      this.colorService.getAllColor().subscribe(response=>{
        this.data=response.data 
        this.dataloaded=true;
      })
    }
    data : Color[]=[];
    dataloaded:boolean=false;
}
