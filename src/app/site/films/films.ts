import { Component } from '@angular/core';
import { Searchform } from "./searchform/searchform";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-films',
  imports: [Searchform, FormsModule, ReactiveFormsModule],
  templateUrl: './films.html',
  styleUrl: './films.css',
})
export class Films {}
