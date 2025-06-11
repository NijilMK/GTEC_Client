import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GenericApiService } from 'src/app/services/api-services/genericApi.service';

@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.css'],
  providers: [TitleCasePipe]
})
export class CrudPageComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() modelName: string = 'Item';
  @Input() apiService!: GenericApiService<any>;

  data: any[] = [];
  newItem: any = {};
  editItem: any = null;
  searchTerm: string = '';
  currentPage = 1;
  pageSize = 5;
   Math = Math;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.apiService.getAll().subscribe(res => this.data = res);
  }

  get filteredData() {
    return this.data.filter(d =>
      this.columns.some(col =>
        ('' + d[col]).toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(start, start + this.pageSize);
  }

  create() {
    this.apiService.create(this.newItem).subscribe(() => {
      this.newItem = {};
      this.loadData();
    });
  }

  startEdit(item: any) {
    this.editItem = { ...item };
  }

  saveEdit() {
    this.apiService.update(this.editItem.id, this.editItem).subscribe(() => {
      this.editItem = null;
      this.loadData();
    });
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
      this.apiService.delete(id).subscribe(() => this.loadData());
    }
  }

  changePage(delta: number) {
    const totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    this.currentPage = Math.max(1, Math.min(this.currentPage + delta, totalPages));
  }
}
