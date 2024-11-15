import { Component, OnInit } from '@angular/core';
import { ProfileImageService } from '../../../services/profile-image.service';
import { ToastrService } from 'ngx-toastr';
import { ProfileImage } from '../../../models/profile-image';

@Component({
  selector: 'app-edit-profile-image',
  templateUrl: './edit-profile-image.component.html',
  styleUrls: ['./edit-profile-image.component.css']
})
export class EditProfileImageComponent implements OnInit {

  profileImageData: ProfileImage | null = null; // Başlangıçta resim olmayabilir
  imageUrl: string = '';
  constructor(
    private profileImageService: ProfileImageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getImage();
  }

  // Resmi yükle
  getImage() {
    this.profileImageService.getImageUrl().subscribe(response => {
      (response.isSuccess)
      {
        this.profileImageData = response.data;
        console.log(this.profileImageData)
        console.log(this.profileImageData.url)
        this.updateImageUrl();
      }
      
    }, error => {
      this.toastrService.error("Profil resmi yüklenemedi.");
    });
  }

  // Dosya seçildiğinde güncelleme işlemini tetikler
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (this.profileImageData) {
        this.updateProfileImage(file,this.profileImageData.id); // Güncelleme işlemi
        console.log(file )
        console.log(this.profileImageData.id)
      } else {
        this.addProfileImage(file); // Ekleme işlemi
      }
    }
  }
  updateImageUrl() {
    if (this.profileImageData && this.profileImageData.url) {
      const timestamp = new Date().getTime();
      this.imageUrl = this.getImageUrl(this.profileImageData.url) + '?t=' + timestamp;
    }
  }
  // Profil resmi ekle
  addProfileImage(file: File) {
    this.profileImageService.addProfileImage(file).subscribe(response => {
      if (response.isSuccess) {
        this.toastrService.success("Resim başarıyla eklendi.");
        this.getImage(); // Resmi güncelle
      }
    }, responseError => {
      this.toastrService.error("Resim eklenirken bir hata oluştu.");
      console.log(responseError)
    });
  }

  // Profil resmi güncelle
  updateProfileImage(file: File,id :number) {
    this.profileImageService.updateProfileImage(file,id).subscribe(response => {
      if (response.isSuccess) {
        this.toastrService.success("Resim başarıyla güncellendi.");
        

        this.getImage(); // Resmi tekrar yükle
      }
    }, responseError => {
      console.log(responseError)
      this.toastrService.error("Resim güncellenirken bir hata oluştu.");
    });
  }

  // Profil resmini sil
  removeProfileImage() {
    if (confirm("Profil resmini silmek istediğinize emin misiniz?")) {
      this.profileImageService.deleteprofileImage().subscribe(response => {
        if (response.isSuccess) {
          this.toastrService.success("Resim başarıyla silindi.");
          this.profileImageData = null; // Resmi temizle
        }
      }, error => {
        this.toastrService.error("Resim silinirken bir hata oluştu.");
      });
    }
  }

  // Resim URL'sini alma
  getImageUrl(imagePath: string): string {
    const baseUrl = 'https://localhost:44300/images/profile/';
    const relativePath = imagePath.split('\\').pop(); // Dosya adını alma
    console.log(`${baseUrl}${relativePath}`)
    return `${baseUrl}${relativePath}`;
  }
}
