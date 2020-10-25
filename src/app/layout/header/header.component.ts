import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDesktop;
  isMobile;
  isTablet;

  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isDesktop  = deviceDetectorService.isDesktop();
    this.isMobile  = deviceDetectorService.isMobile();
    this.isTablet  = deviceDetectorService.isTablet();
  }

  ngOnInit(): void {
  }

}
