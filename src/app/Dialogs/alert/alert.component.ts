import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      message: string;
      type: 'confirmation' | 'warning' | 'success' | 'error';
    },
    private dialogRef: MatDialogRef<AlertComponent>
  ) {}

  ngOnInit(): void {}

  close(response: boolean) {
    this.dialogRef.close(response);
  }
}
