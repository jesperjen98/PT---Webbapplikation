import { Services } from '../../../../shared/models/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss'],
})
export class MyServicesComponent implements OnInit {
  services: Array<Services> = [
    {
      image: 'assets/images/training-program.jpg',
      title: 'TRÄNINGSPROGRAM',
      info: `
        <ul>
          <li>Skräddarsytt träningsprogram utformat specifikt för dig och dina behov.</li>
          <li>Följ dina framsteg i en app som finns både för Android & iOS.</li>
          <li>Flexibelt utformat och kan genomföras i hemmet eller på gymmet.</li>
          <li>Regelbunden uppföljning på distans.</li>
        </ul>
      Ett skräddarsytt träningsprogram som utformas av mig baserat på dina behov, 
      din rörlighet och dina mål. Träningsprogrammet kan utformas för användning av flera olika 
      redskap som finns på gymmet eller i hemmet. Fokus ligger främst på att du ska må bra och känna 
      dig stark i din egen kropp. Vi stämmer av med varandra en gång i månaden via Microsoft Teams.
      `,
      price: '1500 kr/mån',
    },
    {
      image: 'assets/images/training-and-diet.jpg',
      title: 'TRÄNINGSPROGRAM OCH KOSTRÅDGIVNING',
      info: `
        <ul>
          <li>Personligt utformad kostplan utan fasta recept eller dieter.</li>
          <li>Praktiska förslag på bra kolhydrater, proteiner och fetter.</li>
          <li>Lär dig hur du bäst balanserar din kost för just dina behov.</li>
          <li>Regelbunden uppföljning på distans.</li>
          <li>Kombinerar ditt personliga träningsprogram med en personligt utformad kostplan.</li>
        </ul>
        Träning och kost går hand i hand vilket är varför denna tjänst är optimal för dig som är ute 
        efter att bli i bättre form. De personligt utformade programmen inom både träning och kost gör 
        att du får rätt verktyg för att lyckas. Vi pratar om kostvanor och går igenom enkla och smidiga 
        tips som du kan använda dig av för att balansera dina måltider. Jag ger dig sedan förslag på 
        vilka mängder du bör  få i dig samt ger dig tips på hur du kan blanda och bygga upp dina måltider.
        Vi stämmer av med varandra en gång i månaden via Microsoft teams.
      `,
      price: '1650 kr/mån',
    },
    {
      image: 'assets/images/applikation.png',
      title: 'TRÄNINGSAPPLIKATION',
      info: `Praesent tincidunt consectetur dignissim. Proin risus quam, lobortis id dui a, vestibulum cursus ante. Vivamus ipsum nulla, pharetra vitae euismod at, tempus a eros. Pellentesque urna lorem, placerat eget ligula quis, bibendum pulvinar nulla. Duis auctor libero vitae ipsum auctor consectetur. In hac habitasse platea dictumst. Etiam ligula orci, pretium et felis ac, ornare interdum magna. Praesent sit amet erat gravida tortor convallis blandit eu in leo. Nam eget semper enim, eu efficitur risus.`,
      price: null,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
