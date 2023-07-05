import { Component, Inject, OnInit } from '@angular/core';
import { TyreCondition } from 'src/models/tyrecondition.model';
import { TyreService } from '../services/my-http-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  showCamera = false;
  numarInmatriculare: string = '0';
  capturedImageUrl: string = '';
  isImageCaptured: boolean = false;

  toggleCamera() {
    this.showCamera = !this.showCamera;
  }

  closeCamera() {
    this.showCamera = false;
    this.capturedImageUrl = '';
    this.isImageCaptured = false;
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.capturedImageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
    console.log(file);
  }
  resetImage() {
    this.capturedImageUrl = '';
    this.isImageCaptured = false;
  }
  saveImageToDatabase() {
    if (this.isImageCaptured) {
      // de implementat
      console.log('Image saved:', this.capturedImageUrl);
    }
  }

  addData: TyreCondition = {
    id: '',
    NumarInmatriculare: '',
    URLNumarInmatriculare: '',
    NumarKilometrii: 0,
    URLNumarKilometrii: '',
    ProfilInterior: 0,
    URLProfilInterior: '',
    ProfilMijloc: 0,
    URLProfilMijloc: '',
    ProfilExterior: 0,
    URLProfilExterior: ''
  };
    constructor(@Inject(TyreService) private tyreService: TyreService){} 


   ngOnInit(): void {}

    addTyreData(){
    //   this.tyreService.addTyreData(this.addData)
    //   .subscribe ({
    //        next:(tyres) => {
    //         console.log(tyres);
    //        }
    //   });
    // }`
    
console.log(this.addData);

}
}