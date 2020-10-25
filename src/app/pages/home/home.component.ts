import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isDesktop;
  isMobile;
  isTablet;

  images = [
    './assets/img/Component33.png',
    './assets/img/Component32.png',
    './assets/img/Component34.png',
  ];

  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isDesktop = deviceDetectorService.isDesktop();
    this.isMobile = deviceDetectorService.isMobile();
    this.isTablet = deviceDetectorService.isTablet();
  }

  ngOnInit(): void {
  }

}
