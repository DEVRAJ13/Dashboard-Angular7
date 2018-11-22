import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { IImage } from '../modules/slideshow/IImage';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from '../dialog/dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public myDate: Date;
  public today: any;
  public imageUrls: (string | IImage)[] = [
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: '', href: '#config' },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg', clickAction: () => alert('') },
    { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg', caption: '', href: '#config' },
  ];
  public height = '400px';
  public minHeight;
  public arrowSize = '30px';
  public showArrows = true;
  public disableSwiping = false;
  public autoPlay = true;
  public autoPlayInterval = 3333;
  public stopAutoPlayOnSlide = true;
  public debug = false;
  public backgroundSize = 'cover';
  public backgroundPosition = 'center center';
  public backgroundRepeat = 'no-repeat';
  public showDots = true;
  public dotColor = '#FFF';
  public showCaptions = true;
  public captionColor = '#FFF';
  public captionBackground = 'rgba(0, 0, 0, .35)';
  public lazyLoad = false;
  public hideOnNoSlides = false;
  public width = '100%';

  constructor(public route: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.utcTime();
  }

  

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '450px',
      data: { dialog_type: 'service', name: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addNotesPage(): void {
    this.route.navigate(['create-notes']);
  }

  utcTime(): void {
    setInterval(() => {
      const date = new Date().getHours();
      const houre = new Date().getMinutes();
      const second = new Date().getSeconds();
      this.today = new Date().getDate();
      const time = date + ':' + houre + ':' + second;
      this.myDate = JSON.parse(JSON.stringify(time));
    }, 1000);
  }
}



