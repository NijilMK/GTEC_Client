import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fileSelector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  @Input() imageURL!: any;
  @Input() msg = '';
  @Input() label = 'Select Image';
  @Output() uploadedFile: any;
  @Input() Mandatory: boolean = false;
  @Input() isViewMode: boolean = false;

  constructor() { }

  ngOnInit() { }

  reset() {
    this.imageURL = '';
    this.msg = '';
    this.uploadedFile = '';
  }

  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Only images are supported';
      return;
    }
    let file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.uploadedFile = fileReader.result;
      //this.form.value.logo = this.uploadedFile;
    };
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.msg = '';
      this.imageURL = reader.result;
    };
  }
}
