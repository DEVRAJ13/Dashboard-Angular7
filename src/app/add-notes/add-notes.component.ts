import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


// export interface Courses {
//   name: string;
//   id: number;
// }

// export interface Categorys {
//   name: string;
//   id: number;
// }

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {
  courseControl = new FormControl('', [Validators.required]);
  categoryControl = new FormControl('', Validators.required);





  constructor() { }

  ngOnInit() { }

}
