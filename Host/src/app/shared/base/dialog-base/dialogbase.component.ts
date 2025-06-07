import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '../base.component';
import { EventData } from 'src/app/models/utils/event-data';

@Component({
  selector: 'app-dialogbase',
  template: `
    <p>
      dialogbase works!
    </p>
  `,
  styles: [
  ]
})
export class DialogBaseComponent extends BaseComponent{

  @Output() onHideClick= new EventEmitter<EventData>();

  constructor()
  {
    super();
  }

}
