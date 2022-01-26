import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent {
  searchText = '';
  @Input() showResult!: boolean | null;
  @Output() submitted = new EventEmitter();
  constructor() { }
}
