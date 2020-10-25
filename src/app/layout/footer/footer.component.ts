import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isDesktop;
  isMobile;
  isTablet;

  links = [
    {
      title: 'Главная',
      href: '#home'
    },
    {
      title: 'Курсы',
      href: '#courses'
    },
    {
      title: 'Акции',
      href: '#video'
    },
    {
      title: 'Как связаться?',
      href: '#contacts'
    }

  ];

  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isDesktop = deviceDetectorService.isDesktop();
    this.isMobile = deviceDetectorService.isMobile();
    this.isTablet = deviceDetectorService.isTablet();
  }

  ngOnInit(): void {
  }

}
