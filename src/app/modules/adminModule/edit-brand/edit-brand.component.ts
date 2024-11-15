import { Component, Input, OnInit } from '@angular/core';
import { Brand } from '../../../models/brand';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from '../../../services/brand.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrl: './edit-brand.component.css'
})
export class EditBrandComponent implements OnInit{
  @Input() selectedComponent: string = ''; // Seçilen liste türü
  brands:Brand[]
  brandForm: FormGroup;
  isEditing:boolean=false
  isAddingOrEditing = false; // Form görünürlüğünü kontrol eder
/**
 *
 */
constructor(private brandService:BrandService,private formBuilder: FormBuilder,private toastrService:ToastrService) {
  
  
}
  ngOnInit(): void {
    this.createBrandForm()
    this.getAllBrands()
  }






  backandreset(){
    this.brandForm.reset();
    this.isAddingOrEditing=false;
  }
  createBrandForm() {
    this.brandForm = this.formBuilder.group({
     
      brandName: ['', Validators.required] // colorName alanı zorunlu
    });
  }

  showAdd() {
    this.isAddingOrEditing = true;
    this.isEditing = false;
  }

  getAllBrands(){
    this.brandService.getProducts().subscribe(response=>{
this.brands=response.data
    })
  }


  editBrand(brand: Brand) {
    this.isEditing=true
    this.isAddingOrEditing = true;
    if (!this.brandForm.contains('brandId')) {
      this.brandForm.addControl('brandId', this.formBuilder.control(brand.brandId));
    }
    this.brandForm.patchValue({
      brandId: brand.brandId,
      brandName: brand.brandName
    });
  }


  deletebrand(brandId:number){
    this.brandService.deleteBrand(brandId).subscribe(response=>{
      if(response.isSuccess){
      this.toastrService.info(brandId+"ID numaralı marka silinmiştir")
      this.getAllBrands();}
      else{
        this.toastrService.error("Marka silinememiştir")
      }
    })
    }

    addBrand(brand:any){
      this.brandService.addBrand(brand).subscribe(response=>{
        if(response.isSuccess){
          this.toastrService.success(brand.brandName+"'i eklenmiştir")
        }
      },responseError=>{
        if (responseError.error && responseError.error.Error && Array.isArray(responseError.error.Error)) {
          // Hata mesajlarını kullanıcıya göster
          responseError.error.Error.forEach((error: any) => {
            if (error.PropertyName && this.brandForm.get(error.PropertyName)) {
              this.brandForm.get(error.PropertyName)?.setErrors({ customError: error.ErrorMessage });
            }
            this.toastrService.error(error.ErrorMessage, "Doğrulama Hatası");
          });
        } else {
          // Eğer başka bir hata tipi olursa
          this.toastrService.error("Bilinmeyen bir hata oluştu", "Hata");
        }
      })}



      updateColor(brand:any){
        this.brandService.updateBrand(brand).subscribe(response=>{
          if(response.isSuccess){
            this.toastrService.success("Marka Güncellenmiştir")
          }
        },responseError=>{
          if (responseError.error && responseError.error.Error && Array.isArray(responseError.error.Error)) {
            // Hata mesajlarını kullanıcıya göster
            responseError.error.Error.forEach((error: any) => {
              if (error.PropertyName && this.brandForm.get(error.PropertyName)) {
                this.brandForm.get(error.PropertyName)?.setErrors({ customError: error.ErrorMessage });
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
        if (this.brandForm.valid) {
          let brandModel = Object.assign({}, this.brandForm.value); // Formdaki değerleri modelle eşleştirir
          if (!this.isEditing) {
            // Yeni bir renk ekleme
            this.brandService.addBrand(brandModel).subscribe(response => {
              this.getAllBrands();
              this.backandreset()
            });
          } else {
            // Mevcut bir rengi güncelleme
            this.brandService.updateBrand(brandModel).subscribe(response => {
              this.getAllBrands();
              this.backandreset()
    
            });
          }
        }
      }
}
