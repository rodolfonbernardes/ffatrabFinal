import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trailer-item',
  templateUrl: './trailer-item.component.html',
  styleUrls: ['./trailer-item.component.scss']
})
export class TrailerItemComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

}
