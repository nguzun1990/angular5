import { Component, OnInit, Inject } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  typeahead: Observable<any> = null;

  constructor(@Inject('API_URL') private APIUrl: string) { }

  ngOnInit() {

    const searchBox = document.getElementById('textInput');
    this.typeahead = fromEvent(searchBox, 'input').pipe(
      map((e: any) => e.target.value),
      filter(text => text.length > 2),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap(term => ajax(`${this.APIUrl}/cars/search?term=${term}`))
    );

    this.typeahead.subscribe(data => console.log(data))
  }

}
