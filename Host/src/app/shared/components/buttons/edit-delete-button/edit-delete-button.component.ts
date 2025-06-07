import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-EditDeleteButton',
  templateUrl: './edit-delete-button.component.html',
  styleUrls: ['./edit-delete-button.component.css']
})
export class EditDeleteButtonComponent implements OnInit {

  @Output() onEditClick= new EventEmitter<Event>();
  @Output() onDeleteClick= new EventEmitter<Event>();

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  OnEditButtonClick()
  {
    this.onEditClick.emit();
  }

  OnDeleteButtonClick()
  {
    this.onDeleteClick.emit();
  }

}
