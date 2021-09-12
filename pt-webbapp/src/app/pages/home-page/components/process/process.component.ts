import { Component, OnInit } from '@angular/core';
import { InfoCard } from '../../../../models/infoCard';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent implements OnInit {
  infoCards: Array<InfoCard> = [
    {
      number: 1,
      title: 'Title here',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan, metus sit amet tincidunt pulvinar, libero ipsum lobortis nisi, eget eleifend lectus tellus ut libero. Donec et efficitur neque, rhoncus aliquam dolor.',
    },
    {
      number: 2,
      title: 'Title here',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan, metus sit amet tincidunt pulvinar, libero ipsum lobortis nisi, eget eleifend lectus tellus ut libero. Donec et efficitur neque, rhoncus aliquam dolor.',
    },
    {
      number: 3,
      title: 'Title here',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan, metus sit amet tincidunt pulvinar, libero ipsum lobortis nisi, eget eleifend lectus tellus ut libero. Donec et efficitur neque, rhoncus aliquam dolor.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
