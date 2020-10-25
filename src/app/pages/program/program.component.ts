import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  isDesktop;
  isMobile;
  isTablet;

  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isDesktop = deviceDetectorService.isDesktop();
    this.isMobile = deviceDetectorService.isMobile();
    this.isTablet = deviceDetectorService.isTablet();
  }

  ngOnInit(): void {
  }

}
