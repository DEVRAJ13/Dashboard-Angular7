import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SlideshowModule} from 'ng-simple-slideshow';

import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatListModule,
   MatIconModule, MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DialogOverviewExampleDialogComponent } from './dialog/dialog-overview-example-dialog/dialog-overview-example-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddNotesComponent,
    SettingsComponent,
    HeaderComponent,
    SidebarComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SlideshowModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
