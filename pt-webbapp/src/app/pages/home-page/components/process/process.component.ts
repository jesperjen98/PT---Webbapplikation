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
      title: 'Gratis Konsultation',
      info: `Här har vi en stund att lära känna varandra. Vill gärna höra om din nuvarande livssituation & bakgrund samt varför du tagit kontakt med mig. 
            Vi kommer prata om introveckan & hur den spelar in i ditt personliga program.`,
    },
    {
      number: 2,
      title: 'Introvecka',
      info: `Du ska genomgå bedömning övningar för att jag ska se din fysiska kapacitet & rörlighet. Frågeformulär angående hälsa & kost (om det valts till).
            Övningar filmas och skickas till mig så jag kan förbereda ett personligt program för dig. `,
    },
    {
      number: 3,
      title: 'Personligt program start',
      info: `Du kör på i 3 veckor på ditt personliga program. Innan månadens avslut har vi en uppföljning där vi pratar om din utveckling,framsteg & motgångar.
             Hur vi ska gå vidare och så ska du bestämma om du vill fortsätta kommande månad.`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
