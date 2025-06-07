import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BaseComponent } from '../base.component';
import { CrudService } from 'src/app/services/api-services/crud.service';
import { DataTableDirective } from 'angular-datatables';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AddEditDialogbaseComponent } from '../dialog-base/add-edit-dialog-base/add-edit-dialog-base.component';
import { ModelBase } from 'src/app/models/model-base';
import { ServiceLocator } from 'src/app/services/helpers/ServiceLocator.service';

@Component({
  selector: 'app-listbase',
  template: ` <p>listbase works!</p> `,
  styles: [],
})
export class ListBaseComponent<model extends ModelBase>
  extends BaseComponent
  implements OnInit, OnDestroy, AfterViewInit {

  Id: number = 0;
  isDefaultAction: boolean = true;
  rowData!: model;
  dtOptions: any = {};
  url: string = '';
  dtTrigger: Subject<any> = new Subject<any>();
  _crudService: CrudService;
  deletedSuccessfully: string = 'Successfully Deleted';
  listenFunc!: Function;
  showAddNewButton = true;
  Defaultaction = true;
  includeEndpoint: boolean = true;
  vouchertype: string = "";
  selectedItem: any;
  columnTargets: number[] = []
  dataSource!: model[];
  dtInstance!: Promise<DataTables.Api>;
  columnFilters: any; // string[] = ['', '', '']; // Initialize for 3 columns
  searchFields:any;

  @ViewChild(DataTableDirective) dtElement!: DataTableDirective;
  @ViewChild('showModal', { static: true }) showModal?: ModalDirective;
  @ViewChild('AddEditView', { static: false }) view?: AddEditDialogbaseComponent;

  setIncludeEndpoint(value: boolean): void {
    this.includeEndpoint = value;
  }
  setVouchertype(value: string): void {
    this.vouchertype = value;
  }
  setDefaultaction(): void {
    this.Defaultaction = false;
  }

  constructor(public renderer: Renderer2) {
    super();
    this._crudService = ServiceLocator.injector.get(CrudService);
  }

  custoFmormatDate(date: Date) {
    const datePipe = new DatePipe("en-UK");
    return datePipe.transform(date, 'dd-MM-yyyy');
  }

  setURL(url: string) {
    this.url = url;
  }

  ngOnInit() {
    this.setDTOptions();
    this.setAddNewButtonVisibility();
  }

  filterColumn(event: Event, columnIndex: number) {
    const target = event.target as HTMLInputElement;
    this.columnFilters[columnIndex] = target.name +":"+ target.value; // Update filter for the column
    this.dtElement.dtInstance.then((dt) => {
      dt.ajax.reload(); // Reload the table data with new filters
    });
  }

  handleSearch(criteria: any)
  {
    const searchData = this.searchFields.reduce((acc:any, field:any) => {
       if (field.type === 'number') { acc[field.label] = { min: field.min, max: field.max }; }
       else if (field.type === 'date') { acc[field.label] = { startDate: field.startDate, endDate: field.endDate }; }
        else if (field.type === 'list') { acc[field.label] = field.selectedItem; }
         else { acc[field.label] = field.value; } return acc; },{});

        this.columnFilters = searchData;

        this.dtElement.dtInstance.then((dt) => {
          dt.ajax.reload(); // Reload the table data with new filters
        });
  }

  setAddNewButtonVisibility() {
    const setting = this._localStorage.getCompanySetting();
    if (setting) {
      if (setting.mastersFetchFrom) {
        this.showAddNewButton = false;
      }
    }
  }

  setDTOptions() {
    const that = this;
    const userType = this._localStorage.getUser()?.userTypeId;
    let columns = this.getColumns().concat([
      {
        title: 'Actions',
        data: '',
        orderable: false,
        searchable: true,
        render: function (data, type, row, meta) {
          if (row.id == 1 && that.Defaultaction == false) {
            return ('<button disabled class="table-btn ms-2" title="Edit"  edit-doc-id="' +
              row.id +
              '" edit-index="' +
              meta.row +
              '" ><i class="fa fa-pencil" edit-doc-id="' +
              row.id +
              '" edit-index="' +
              meta.row +
              '" ></i> </button>' +
              '<button disabled class="table-btn ms-2" title="Delete" delete-doc-id="' +
              row.id +
              '" edit-index="' +
              meta.row +
              '" ><i class="fa-solid fa-trash-can" delete-doc-id="' +
              row.id +
              '" edit-index="' +
              meta.row +
              '" ></i> </button>');
          } else {
            return (
              // '<button class="table-btn ms-2" title="View"  view-doc-id="' +
              // row.id +
              // '" edit-index="' +
              // meta.row +
              // '" ><i class="fa fa-eye" view-doc-id="' +
              // row.id +
              // '" edit-index="' +
              // meta.row +
              // '" ></i></button>' +
              '<button class="table-btn ms-2" title="Edit" edit-doc-id="' +
              row.id +
              '" edit-index="' +
              meta.row +
              '" ><i class="fa fa-pencil" edit-doc-id="' +
              row.id +
              '" edit-index="' +
              meta.row +
              '" ></i> </button>' +
              '<button class="table-btn ms-2" title="Delete" delete-doc-id="' +
              row.id +
              '" edit-index="' +
              meta.row +
              '" ><i class="fa-solid fa-trash-can" delete-doc-id="' +
              row.id +
              '" edit-index="' +
              meta.row +
              '" ></i> </button>'
            );
          }
        },
      },
    ]);
    if (this.isDefaultAction == false) {
      columns = this.getColumns();
    }
    this.dtOptions = {
      serverSide: true,
      processing: true,
      caches: true,
      colReorder: true,
      stateSave: true,
      ajax: (dataTablesParameters: any, callback: any) => {
        const additionalValues = {
          type: this.vouchertype,
          userType: userType,
          filters: this.columnFilters
        };
        const requestData = { ...dataTablesParameters, ...additionalValues };
        this._crudService
          .GetPaginated(this.url, requestData, this.includeEndpoint)
          .subscribe((resp) => {
            this.dataSource = resp.data;
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: resp.data,
            });
          });
      },
      columns: columns,
      dom: 'Bfrtip',
      buttons: [
        {
          "extend": 'excel',
          "text": '<i class="fa-solid fa-file-export fs_2"></i>',
          'className': 'table-action-btn',
          "titleAttr" : "Export"
        },
        {
          "extend": 'colvis',
          "text": '<i class="fa-solid fa-eye-slash fs_2"></i>',
          'className': 'table-action-btn',
          "titleAttr" : "Show/Hide Columns"
        },
      ],
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listen('document', 'click', (event) => {
      if (event.target.hasAttribute('edit-doc-id')) {
        this.Id = parseInt(event.target.getAttribute('edit-doc-id'));
        const index = parseInt(event.target.getAttribute('edit-index'));
        this.rowData = this.dataSource[index];
        this.Edit(this.rowData);
      } else if (event.target.hasAttribute('view-doc-id')) {
        this.Id = parseInt(event.target.getAttribute('view-doc-id'));
        const index = parseInt(event.target.getAttribute('edit-index'));
        this.rowData = this.dataSource[index];
        this.View(this.rowData);
      } else if (event.target.hasAttribute('delete-doc-id')) {
        this.Id = parseInt(event.target.getAttribute('delete-doc-id'));
        const index = parseInt(event.target.getAttribute('edit-index'));
        this.rowData = this.dataSource[index];
        this.delete(this.rowData.id);
      }
    });
  }

  AddNew() {
    if (this.showAddNewButton) {
      this.view?.reSetModel();
      this.showModal?.show();
    }
  }

  Edit(data: any) {
    const copy = { ...data };
    this.selectedItem = copy;
    if (this.view) {
      this.view.isEdit = true;
      this.view.isView = false;
    }
    this.view?.setModel(copy);
    this.showModal?.show();
  }

  View(data: any) {
    const copy = { ...data };
    this.selectedItem = copy;
    if (this.view) {
      this.view.isView = true;
      this.view.isEdit = false;
    }
    this.view?.setModel(copy);
    this.showModal?.show();
  }

  OnSaveClick(data: any) {
    if (data.status === true) {
      this.rerender();
    }
    this.showModal?.hide();
    $(".modal-backdrop").remove();
  }

  getColumns(): DataTables.ColumnSettings[] {
    return [
      {
        title: 'Id',
        data: 'id',
      },
    ];
  }

  delete(id: number) {
    this._uiService
      .AskDeleteConfirmation(this._translate)
      .subscribe((result) => {
        if (result == true) {
          this._crudService.delete(this.url, id).subscribe({
            next: (val: any) => {
              if (val.success === true) {
                this._uiService.ShowDeleteSuccessAlert(this._translate);
                this.rerender();
              }
              else {
                this._uiService.ShowErrorAlert(val.message, this._translate);
              }
            },
            error: (error: any) => {
              this.LogError(error);
            },
          });
        }
      });
  }

  rerender(): void {
    setTimeout(() => {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.ajax.reload();
        if (this.vouchertype && this.vouchertype === "Main") {
          dtInstance.column(3).visible(false);
          dtInstance.column(4).visible(false);
        } else if (this.vouchertype && this.vouchertype === "Sub") {
          dtInstance.column(3).visible(true);
          dtInstance.column(4).visible(false);
        } else if (this.vouchertype && this.vouchertype === "Group") {
          dtInstance.column(3).visible(false);
          dtInstance.column(4).visible(true);
        }
      });
    }, 0);
  }

  ngOnDestroy(): void {
    this.showModal?.hide();
    $(".modal-backdrop").remove();
  }

}
