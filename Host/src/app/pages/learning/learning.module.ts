import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Page Route
import { LearningRoutingModule } from './learning-routing.module';
import { CoursesModule } from './courses/courses.module';
import { StudentModule } from './student/student.module';
import { InstructorsModule } from './instructors/instructors.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentComponent } from './department/department.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { FormModule } from '../forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [DepartmentComponent, AddEditDepartmentComponent],
  imports: [
    CommonModule,
    LearningRoutingModule,
    CoursesModule,
    SharedModule,
    StudentModule,
    InstructorsModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
    ModalModule
  ]
})
export class LearningModule { }
