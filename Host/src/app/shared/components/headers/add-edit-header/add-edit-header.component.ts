import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-AddEditHeader',
  templateUrl: './add-edit-header.component.html',
  styleUrls: ['./add-edit-header.component.css']
})
export class AddEditHeaderComponent implements OnInit {

  @Input() title = '';
  @Input() titlePrefix = 'Add';
  @Input() isEditMode = false;
  @Input() isViewMode = false;
  @Output() onCancelClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit() { }

  getPrefix() {
    if (this.isEditMode)
      this.titlePrefix = "Edit"
    else if (this.isViewMode)
      this.titlePrefix = ""
    else
      this.titlePrefix = "Add"
    return this.titlePrefix;
  }
  
  cancelClick() {
    this.onCancelClick.emit();
  }

}
