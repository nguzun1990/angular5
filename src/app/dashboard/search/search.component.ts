import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  
@Component({
  selector: 'search-box',
  template: `
    <form [formGroup]="form">
      <input type="text" formControlName="search"> 
    </form>	
  `
})
export class SearchComponent implements OnInit {
    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            search: []
        })
        this.form.get('search').valueChanges
            .debounceTime(300)
            .subscribe(data => console.info(data))
    }

    ngOnInit() {

    }
}