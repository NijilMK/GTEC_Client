import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-addNewButton',
  templateUrl: './add-new-button.component.html',
  styleUrls: ['./add-new-button.component.css']
})
export class AddNewButtonComponent implements OnInit {

  @Input() caption: string = 'MENUITEMS.PAGES.LIST.ADDNEW';
  @Output() onClick = new EventEmitter<Event>();

  constructor(private translate: TranslateService) { }

  ngOnInit() { }

  OnButtonClick() {
    this.onClick.emit();
  }
}
