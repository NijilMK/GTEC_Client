import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor() {}

  // canDlete(): boolean {
  //   const isSuccess: boolean = false;

  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: 'rgb(3, 142, 220)',
  //     cancelButtonColor: 'rgb(243, 78, 78)',
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, cancel!',
  //   }).then((result) => {
  //     if (result.value) {
  //       isSuccess = true;
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire({
  //         title: 'Cancelled',
  //         text: 'Your record is safe :)',
  //         icon: 'error',
  //         confirmButtonColor: 'rgb(3, 142, 220)',
  //         showCancelButton: true,
  //       });
  //     }
  //   });

  //   return isSuccess;
  // }

  AskDeleteConfirmation(t: TranslateService): Observable<any> {
    return new Observable((observer) => {
      //this.title = this.translate.instant('MENUITEMS.PAGES.LIST.ADDNEW');
      Swal.fire({
        title: t.instant('MENUITEMS.MESSAGES.LIST.AREUSUREDELETE'),
        text: t.instant('MENUITEMS.MESSAGES.LIST.YOUWONTABLETOREVERT'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(3, 142, 220)',
        cancelButtonColor: 'rgb(243, 78, 78)',
        confirmButtonText: t.instant('MENUITEMS.MESSAGES.LIST.YESDELETE'),
        cancelButtonText: t.instant('MENUITEMS.MESSAGES.LIST.CANCEL'),
      }).then((result) => {
        if (result.value) {
          observer.next(true);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire({
          //   title: t.instant('MENUITEMS.MESSAGES.LIST.CANCELLED'),
          //   text: t.instant('MENUITEMS.MESSAGES.LIST.YOUCANCELEDDELETE'),
          //   icon: 'error',
          //   confirmButtonColor: 'rgb(3, 142, 220)',
          //   showCancelButton: true,
          // });
        }
      });
      // Unsubscribe after completing
      // the sequence
      return { unsubscribe() {} };
    });
  }
  //'Deleted!',

  ShowDeleteSuccessAlert(t: TranslateService) {
    Swal.fire({
      title: t.instant('MENUITEMS.MESSAGES.LIST.DELETED'),
      text: t.instant('MENUITEMS.MESSAGES.LIST.RECORDDELETED'),
      confirmButtonColor: 'rgb(3, 142, 220)',
      icon: 'success',
      timer: 1000,
    });
  }

  ShowSaveSuccessAlert(t: TranslateService) {
    Swal.fire({
      title: t.instant('MENUITEMS.MESSAGES.LIST.SAVESUCCESS'),
      text: t.instant('MENUITEMS.MESSAGES.LIST.RECORDSAVED'),
      confirmButtonColor: 'rgb(3, 142, 220)',
      icon: 'success',
      timer: 1000,
    });
  }

  ShowUpdateSuccessAlert(t: TranslateService) {
    Swal.fire({
      title: t.instant('MENUITEMS.MESSAGES.LIST.UPDATESUCCESS'),
      text: t.instant('MENUITEMS.MESSAGES.LIST.RECORDUPDATED'),
      confirmButtonColor: 'rgb(3, 142, 220)',
      icon: 'success',
      timer: 1000,
    });
  }

  ShowErrorAlert(error: string, t: TranslateService) {
    Swal.fire({
      title: t.instant('MENUITEMS.MESSAGES.LIST.ERROR'),
      text:error,
      confirmButtonColor: 'rgb(3, 142, 220)',
      icon: 'error',
    });
  }
}
