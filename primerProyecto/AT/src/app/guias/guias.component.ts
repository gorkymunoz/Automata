import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {

  @Input() resultado: any = [];

  constructor() {

  }

  ngOnInit() {
  }

}
