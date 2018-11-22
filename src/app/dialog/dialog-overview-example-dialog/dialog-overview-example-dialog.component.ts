import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Courses } from '../../interfaces/courses';
import { Categorys } from '../../interfaces/categorys';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  public dialog_type: any;
  public courses: Courses[] = [
    { name: 'CBSC', id: 0 },
    { name: 'ICSE', id: 1 },
    { name: 'B-TECH', id: 2 },
    { name: 'OTHER', id: 3 },
  ];
  public categorys: Categorys[] = [
    { name: 'Computer Science', id: 0 },
    { name: 'Mathamatics', id: 1 },
    { name: 'Science', id: 2 },
    { name: 'OTHER', id: 3 },
  ];

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialog_type = data.type;
  }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

