import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  isDesktop;
  isMobile;
  isTablet;

  contacts = [
    {
      image: 'assets/img/placeholder1.png',
      title: 'АДРЕС',
      text: 'Досмухамедова 89'
    },
    {
      image: 'assets/img/envelope1.png',
      title: 'E-MAIL',
      text: 'reself.kz@gmail.com'
    },
    {
      image: 'assets/img/phone_logo.png',
      title: 'ТЕЛЕФОН',
      text: '+7(707) 326 48 18'
    },
    {
      image: 'assets/img/time1.png',
      title: 'РАБОЧИЕ ЧАСЫ',
      text: 'пн - пт (10:00-19:00)'
    },
  ];


  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isDesktop = deviceDetectorService.isDesktop();
    this.isMobile = deviceDetectorService.isMobile();
    this.isTablet = deviceDetectorService.isTablet();
  }

  ngOnInit(): void {
  }

}
