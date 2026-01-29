import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Searchmovie } from '../../films/services/searchmovie';
import { FormValidators } from '../../films/form-validators';
import { List } from "../directives/list";

@Component({
  selector: 'app-searchform',
  imports: [FormsModule, ReactiveFormsModule, List],
  templateUrl: './searchform.html',
  styleUrl: './searchform.css',
})
export class Searchform implements OnInit {

  public searchForm: FormGroup = new FormGroup({});
  private titleControl: FormControl = new FormControl({});
  private yearControl: FormControl = new FormControl({});
  protected results: any;
  protected errors: string = '';

  constructor(private fb: FormBuilder, private searchMovie: Searchmovie, private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {

    let titlePattern = '^[ a-zA-Z0-9\\s,.]+$';
    let yearPattern = '^(19|20)\\d{2}$';
    this.titleControl = this.fb.control('', [Validators.required, Validators.maxLength(30), Validators.pattern(titlePattern)]);
    this.yearControl = this.fb.control('', [Validators.pattern(yearPattern), FormValidators.integerBetween(1900, 2026)]);
    this.searchForm = this.fb.group({
      title: this.titleControl,
      year: this.yearControl,
    });

  };

  public startSearch(): void {

    const title = this.titleControl.valid ? this.titleControl.value : null;
    const year = this.yearControl.valid ? this.yearControl.value : null;
    console.log(`Searching for films with title="${title}" and year="${year}"`);

    let action = (data: any) => {
      if (data.Response === 'False') {
        this.errors = data.Error || 'Aucun film trouvé.';
        this.results = null;
      } else {
        this.errors = '';
        this.results = data;
      }
      this.cdr.detectChanges();
      console.log(data);
    };

    if (title) {
      this.searchMovie.search(action, title, year);
    } else {
      this.errors = 'Le titre est obligatoire pour lancer une recherche.';
      this.results = null;
      this.cdr.detectChanges();
    }

  };

}
