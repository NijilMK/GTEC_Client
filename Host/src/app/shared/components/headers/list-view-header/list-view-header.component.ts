import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-listViewHeader',
  templateUrl: './list-view-header.component.html',
  styleUrls: ['./list-view-header.component.css']
})
export class ListViewHeaderComponent implements OnInit {
  @Input() showAddNewButton: boolean = true;
  @Input() Header: string = '';
  @Input() buttonText: string = 'Add';
  @Output() onAddNewClick = new EventEmitter<Event>();

  constructor(private translate: TranslateService) { }

  ngOnInit() { }

  OnAddNewButtonClick() {
    this.onAddNewClick.emit();
  }

}
