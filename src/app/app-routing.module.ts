import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    'path':'',
    'component': HomeComponent
},
{
  'path':'home',
  'component': HomeComponent
},
{
  'path':'create-notes',
  'component':AddNotesComponent
},
{
  'path':'settings',
  'component':SettingsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
