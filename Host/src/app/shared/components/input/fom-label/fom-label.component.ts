import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-FomLabel',
  templateUrl: './fom-label.component.html',
  styleUrls: ['./fom-label.component.css']
})
export class FomLabelComponent implements OnInit {


  @Input() title:string = '';
  @Input() Text:string = '';
  @Input() Mandatory:boolean = false;
  @Input() underline:boolean = false;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
