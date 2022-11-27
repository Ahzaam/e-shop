import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.css'],
})
export class ImageCropComponent implements OnInit {
  maintainAspectRatio = false;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      event: any;
      aspectRatio: number;
      maintainAspectRatio: boolean;
      rounded: boolean;
    },
    private matDialogRef: MatDialogRef<ImageCropComponent>
  ) {
    if (!this.data.aspectRatio) {
      this.data.aspectRatio = 1;
    } else {
      this.maintainAspectRatio = true;
    }
  }

  ngOnInit(): void {
    this.fileChangeEvent(this.data.event);
  }

  imageChangedEvent: any = '';
  croppedImage: any = { base64: '' };

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event;
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  cropAndClose() {
    this.matDialogRef.close(this.croppedImage);
  }
}
