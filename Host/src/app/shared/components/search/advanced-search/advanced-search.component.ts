import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent {
    @Input() fields: any[] = [];
    @Output() search = new EventEmitter<any>();
    dropdownOpen: boolean = false;
    //fields: any[] = [ { type: 'text', label: 'Name', value: '' }, { type: 'number', label: 'Age', min: null, max: null }, { type: 'date', label: 'Date of Birth', startDate: '', endDate: '' }, { type: 'list', label: 'Country', options: ['India', 'USA', 'UK'], selectedItem: '' } ];

    constructor(private eRef: ElementRef) { }

    ngOnInit(): void { }

    onSearch()
    {
       this.search.emit(this.fields);
    }

    toggleDropdown()
     { this.dropdownOpen = !this.dropdownOpen;

     }

     @HostListener('document:click', ['$event'])
     clickOutside(event:Event)
      { if (this.dropdownOpen && !this.eRef.nativeElement.contains(event.target))
       { this.dropdownOpen = false; } }
}
