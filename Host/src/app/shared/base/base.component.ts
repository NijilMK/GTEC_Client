import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { URLConstantService } from 'src/app/services/api-services/url-constant.service';
import { ServiceLocator } from 'src/app/services/helpers/ServiceLocator.service';
import { LocalStorageService } from 'src/app/services/uiservice/local-storage.service';
import { UiService } from 'src/app/services/uiservice/ui.service';

@Component({
  selector: 'app-base',
  template: ` <p>base works!</p> `,
  styles: [],
})
export class BaseComponent {
  public _uiService: UiService;
  public _translate: TranslateService;
  public _urlConstant : URLConstantService;
  public _localStorage : LocalStorageService;

  constructor()
  {
    this._translate = ServiceLocator.injector.get(TranslateService)
    this._uiService = ServiceLocator.injector.get(UiService);
    this._urlConstant = ServiceLocator.injector.get(URLConstantService);
    this._localStorage = ServiceLocator.injector.get(LocalStorageService);
  }

  LogError(error: Error) {
    this._uiService.ShowErrorAlert(error.message, this._translate);
  }
}
