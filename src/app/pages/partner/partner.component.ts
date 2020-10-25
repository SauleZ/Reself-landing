import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  isDesktop;
  isMobile;
  isTablet;

  constructor(private deviceDetectorService: DeviceDetectorService) {
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isDesktop = this.deviceDetectorService.isDesktop();
    this.isTablet = this.deviceDetectorService.isTablet();
  }

  partners = [
    {
      image: 'assets/img/KPD_logo.png',
      alt: 'Kaz Petro'
    },
    {
      image: 'assets/img/bcc.png',
      alt: 'BCC'
    },
    {
      image: 'assets/img/samsung.png',
      alt: 'Samsung'
    },
    {
      image: 'assets/img/bilgen.png',
      alt: 'Bilgen'
    },
    {
      image: 'assets/img/UNICEF_Logo%201.png',
      alt: 'UNICEF'
    },
    {
      image: 'assets/img/iitu.png',
      alt: 'IITU'
    },
    {
      image: 'assets/img/Kcell_logo.png',
      alt: 'Kcell'
    },
    {
      image: 'assets/img/home_credit_bank_logo.png',
      alt: 'HCB'
    }
  ];

  ngOnInit(): void {
  }

}
