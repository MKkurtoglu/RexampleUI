import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from '../../../services/color.service';
import { Color } from '../../../models/color';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-color',
  templateUrl: './edit-color.component.html',
  styleUrl: './edit-color.component.css'
})
export class EditColorComponent implements OnInit{
/**
 *
 */
@Input() selectedComponent: string = ''; // Seçilen liste türü
colors:Color[]
colorForm: FormGroup;
isEditing:boolean=false
isAddingOrEditing = false; // Form görünürlüğünü kontrol eder
constructor(private colorService :ColorService,private formBuilder: FormBuilder,private toastrService:ToastrService) {
  
  
}
  ngOnInit(): void {
    this.getAllColor();
    this.createColorForm()
  }



  getAllColor(){
this.colorService.getAllColor().subscribe(response=>{
  this.colors=response.data
})
  }
  backandreset(){
    this.colorForm.reset();
    this.isAddingOrEditing=false;
  }
  createColorForm() {
    this.colorForm = this.formBuilder.group({
     
      colorName: ['', Validators.required] // colorName alanı zorunlu
    });
  }

  showAdd() {
    this.isAddingOrEditing = true;
    this.isEditing = false;
  }

  editColor(color: Color) {
    this.isEditing=true
    this.isAddingOrEditing = true;
    if (!this.colorForm.contains('colorId')) {
      this.colorForm.addControl('colorId', this.formBuilder.control(color.colorId));
    }
    this.colorForm.patchValue({
      colorId: color.colorId,
      colorName: color.colorName
    });
  }

  deleteColor(colorId:number){
this.colorService.deleteColor(colorId).subscribe(response=>{
  if(response.isSuccess){
  this.toastrService.info(colorId+"ID numaralı renk silinmiştir")
  this.getAllColor();}
  else{
    this.toastrService.error("Renk silinememiştir")
  }
})
}
addColor(color:any){
this.colorService.addColor(color).subscribe(response=>{
  if(response.isSuccess){
    this.toastrService.success(color.colorName+"'i eklenmiştir")
  }

},responseError=>{
    if (responseError.error && responseError.error.Error && Array.isArray(responseError.error.Error)) {
      // Hata mesajlarını kullanıcıya göster
      responseError.error.Error.forEach((error: any) => {
        if (error.PropertyName && this.colorForm.get(error.PropertyName)) {
          this.colorForm.get(error.PropertyName)?.setErrors({ customError: error.ErrorMessage });
        }
        this.toastrService.error(error.ErrorMessage, "Doğrulama Hatası");
      });
    } else {
      // Eğer başka bir hata tipi olursa
      this.toastrService.error("Bilinmeyen bir hata oluştu", "Hata");
    }
  })
}

updateColor(color:any){
  this.colorService.updateColor(color).subscribe(response=>{
    if(response.isSuccess){
      this.toastrService.success("Renk Güncellenmiştir")
    }
  },responseError=>{
    if (responseError.error && responseError.error.Error && Array.isArray(responseError.error.Error)) {
      // Hata mesajlarını kullanıcıya göster
      responseError.error.Error.forEach((error: any) => {
        if (error.PropertyName && this.colorForm.get(error.PropertyName)) {
          this.colorForm.get(error.PropertyName)?.setErrors({ customError: error.ErrorMessage });
        }
        this.toastrService.error(error.ErrorMessage, "Doğrulama Hatası");
      });
    } else {
      // Eğer başka bir hata tipi olursa
      this.toastrService.error("Bilinmeyen bir hata oluştu", "Hata");
    }
  })
}

  onSubmit() {
    if (this.colorForm.valid) {
      let colorModel = Object.assign({}, this.colorForm.value); // Formdaki değerleri modelle eşleştirir
      if (!this.isEditing) {
        // Yeni bir renk ekleme
        this.colorService.addColor(colorModel).subscribe(response => {
          this.getAllColor();
          this.backandreset()
        });
      } else {
        // Mevcut bir rengi güncelleme
        this.colorService.updateColor(colorModel).subscribe(response => {
          this.getAllColor();
          this.backandreset()

        });
      }
    }
  }
}
