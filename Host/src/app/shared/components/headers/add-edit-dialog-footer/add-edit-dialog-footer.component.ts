import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-AddEditDialogFooter',
  templateUrl: './add-edit-dialog-footer.component.html',
  styleUrls: ['./add-edit-dialog-footer.component.css']
})
export class AddEditDialogFooterComponent implements OnInit {

  @Input() data:any;
  @Input() isViewMode = false;
  @Input() submitted = false;
  @Output() onCancelClick= new EventEmitter<Event>();

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  OnCancelButtonClick()
  {
    this.onCancelClick.emit();
  }
}
