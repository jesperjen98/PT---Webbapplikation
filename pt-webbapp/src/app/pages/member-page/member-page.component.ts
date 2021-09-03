import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';

interface Card {
  url: string;
  description: string;
  title: string;
}

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.scss'],
})
export class MemberPageComponent implements OnInit {
  public cards: Card[] = [];
  constructor(private _authService: AuthService) {
    var kalendar: Card = {
      url: 'https://powerslides.com/wp-content/uploads/2021/01/Training-Plan-Template-1.png',
      description:
        'Här kan du se över dina personliga mål och kommande händelser (träning, uppföljning, invägning)',
      title: 'Kalender',
    };
    var health: Card = {
      url: 'https://www.1177.se/globalassets/1177/nationell/media/illustrationer/ovrig-grafik/symboler-diagram-kartor/ikoner-sektionsstartsidor/img-liv-halsa.svg',
      description:
        'Fyll i hälsodeklartionen så jag kan få en bättre överblick.',
      title: 'Hälsodeklaration',
    };
    var exercise: Card = {
      url: 'https://dailyburn.com/life/wp-content/uploads/2021/03/push-ups-cover.png',
      description:
        'Här kan du få hjälp med att utföra övningar på ett bra och säkert sätt.',
      title: 'Övningsbank',
    };
    var food: Card = {
      url: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg',
      description: 'Här kan du fylla i dina matvanor. Alla kalorier räknas!',
      title: 'Matdagbok',
    };
    var program: Card = {
      url: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/09/Barbell-Training-Program-for-the-Beginner.jpg',
      description: 'Här kan du hitta träningsprogram skräddarsydda för dig.',
      title: 'Program',
    };
    var progress: Card = {
      url: 'https://www.emoji.co.uk/files/mozilla-emojis/objects-mozilla/11933-chart-with-upwards-trend.png',
      description: 'Här kan du se över hur mycket bättre du blivit.',
      title: 'Min progression',
    };

    this.cards.push(kalendar);
    this.cards.push(health);
    this.cards.push(exercise);
    this.cards.push(food);
    this.cards.push(program);
    this.cards.push(progress);
  }

  ngOnInit(): void {}
}
