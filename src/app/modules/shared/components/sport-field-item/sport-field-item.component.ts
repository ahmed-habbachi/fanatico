import { Component, Input, OnInit } from '@angular/core';
import { SportField } from 'src/app/interfaces/sport-field.interface';

@Component({
  selector: 'fan-sport-field-item',
  templateUrl: './sport-field-item.component.html',
  styleUrls: ['./sport-field-item.component.scss'],
})
export class SportFieldItemComponent implements OnInit {
  @Input() sportField: SportField;
  @Input() id: string;

  constructor() {}

  ngOnInit() {
  }

}
