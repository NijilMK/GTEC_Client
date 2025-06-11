import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AddNewButtonComponent } from './components/buttons/add-new-button/add-new-button.component';
import { EditDeleteButtonComponent } from './components/buttons/edit-delete-button/edit-delete-button.component';
import { AddEditDialogFooterComponent } from './components/headers/add-edit-dialog-footer/add-edit-dialog-footer.component';
import { FomLabelComponent } from './components/input/fom-label/fom-label.component';
import { ListViewHeaderComponent } from './components/headers/list-view-header/list-view-header.component';
import { RequiredFormInputComponent } from './components/input/required-form-input/required-form-input.component';
import { SelectInputComponent } from './components/input/select-input/select-input.component';
import { AddEditHeaderComponent } from './components/headers/add-edit-header/add-edit-header.component';
import { AddEditDialogbaseComponent } from './base/dialog-base/add-edit-dialog-base/add-edit-dialog-base.component';
import { FileSelectorComponent } from './components/input/file-selector/file-selector.component';
import { DateInputComponent } from './components/input/date-input/date-input.component';
import { RadioInputComponent } from './components/input/radio-input/radio-input.component';
import { AdvancedSearchComponent } from './components/search/advanced-search/advanced-search.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CrudPageComponent } from './common/crud-page/crud-page.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,AddNewButtonComponent, EditDeleteButtonComponent, AddEditDialogFooterComponent,
    FomLabelComponent, ListViewHeaderComponent, RequiredFormInputComponent,
    SelectInputComponent, AddEditHeaderComponent, AddEditDialogbaseComponent,FileSelectorComponent,
    DateInputComponent, RadioInputComponent, AdvancedSearchComponent,CrudPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    NgSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalModule,
    FlatpickrModule,
  ],
  exports: [BreadcrumbsComponent,AddNewButtonComponent, EditDeleteButtonComponent, AddEditDialogFooterComponent,
    FomLabelComponent, ListViewHeaderComponent, RequiredFormInputComponent,
    SelectInputComponent, AddEditHeaderComponent, AddEditDialogbaseComponent,FileSelectorComponent,
    DateInputComponent, RadioInputComponent, AdvancedSearchComponent, CrudPageComponent]
})
export class SharedModule { }
