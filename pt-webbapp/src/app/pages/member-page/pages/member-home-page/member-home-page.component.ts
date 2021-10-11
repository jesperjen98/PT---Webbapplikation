import { Component, OnInit } from '@angular/core';
import { CardNavigation } from 'src/app/models/cardNavigation';

@Component({
  selector: 'app-member-home-page',
  templateUrl: './member-home-page.component.html',
  styleUrls: ['./member-home-page.component.scss'],
})
export class MemberHomePageComponent implements OnInit {
  navigationCards: Array<CardNavigation> = [
    {
      redirectTo: 'user/programs',
      imageSrc:
        'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/09/Barbell-Training-Program-for-the-Beginner.jpg',
      description: 'Här kan du hitta träningsprogram skräddarsydda för dig.',
      title: 'PROGRAM',
    },
    {
      redirectTo: 'user/dietPlans',
      imageSrc:
        'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg',
      description: 'Här kan du hitta kostplaner skräddarsydda för dig.',
      title: 'KOSTPLANER',
    },
    {
      redirectTo: '#',
      imageSrc:
        'https://dailyburn.com/life/wp-content/uploads/2021/03/push-ups-cover.png',
      description:
        'Här kan du få hjälp med att utföra övningar på ett bra och säkert sätt.',
      title: 'ÖVNINGSBANK',
    },
    {
      redirectTo: 'user/healthDeclaration',
      imageSrc:
        'https://www.1177.se/globalassets/1177/nationell/media/illustrationer/ovrig-grafik/symboler-diagram-kartor/ikoner-sektionsstartsidor/img-liv-halsa.svg',
      description:
        'Fyll i hälsodeklartionen så jag kan få en bättre överblick.',
      title: 'HÄLSODEKLARATION',
    },
    {
      redirectTo: '#',
      imageSrc:
        'https://powerslides.com/wp-content/uploads/2021/01/Training-Plan-Template-1.png',
      description:
        'Här kan du se över dina personliga mål och kommande händelser (träning, uppföljning, invägning)',
      title: 'KALENDER',
    },
    {
      redirectTo: '#',
      imageSrc:
        'https://www.emoji.co.uk/files/mozilla-emojis/objects-mozilla/11933-chart-with-upwards-trend.png',
      description: 'Här kan du se över hur mycket bättre du blivit.',
      title: 'MIN PROGRESSION',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
