import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],
})
export class BotonComponent implements OnInit {
  @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}

  OnClick(): void {
    console.log('CLICK');
  }
}
