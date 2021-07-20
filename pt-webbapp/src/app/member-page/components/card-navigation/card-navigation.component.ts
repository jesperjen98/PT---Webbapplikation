import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-navigation',
  templateUrl: './card-navigation.component.html',
  styleUrls: ['./card-navigation.component.scss'],
})
export class CardNavigationComponent implements OnInit {
  @Input() public description: string = '';
  @Input() public title: string = '';
  @Input() public url: string = '';

  constructor() {}

  ngOnInit(): void {}
}
