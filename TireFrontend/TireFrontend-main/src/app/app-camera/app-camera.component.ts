import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';

@Component({
  selector: 'app-camera',
  templateUrl: './app-camera.component.html',
  styleUrls: ['./app-camera.component.css'],
})
export class AppCameraComponent implements OnInit {
  public trigger: Subject<void> = new Subject<void>();
  public webcamImage!: WebcamImage;
  public webcamError!: WebcamInitError;
  public isImageCaptured: boolean = false;
  previewImage: string = '';
  public capturedImage: string = '';
  public showCapturedImage: boolean = false;
  public isMobile: boolean = false;

  public webcamWidth: number = 640;
  public webcamHeight: number = 480;
  public imageQuality: number = 0.92;

  ngOnInit(): void {
    this.checkMobile();
  }

  handleImageCapture(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.capturedImage = webcamImage.imageAsDataUrl;
    this.isImageCaptured = true;
    this.showCapturedImage = true;
  }
  checkMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    this.isMobile = /iphone|ipad|ipod|android/i.test(userAgent);
    if (this.isMobile) {
      this.webcamWidth = 400;
      this.webcamHeight = 300;
    }
  }

  handleCameraError(error: WebcamInitError): void {
    this.webcamError = error;
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  snapshot(event: WebcamImage) {
    this.previewImage = event.imageAsDataUrl;
  }

  saveImageToDatabase(): void {
    // Simulate sending the image to the server
    console.log('Image saved:', this.webcamImage);
  }

  resetImage(): void {
    this.isImageCaptured = false;
    this.showCapturedImage = false;
  }
}
