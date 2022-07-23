import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent implements OnInit {
  @Input() text: string = '';

  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  OnClick(): void {
    this.btnClick.emit();
  }
}