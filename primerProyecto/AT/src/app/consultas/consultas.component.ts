import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  @Input() resultado: any;

  constructor() { }

  ngOnInit() {
  }

}
