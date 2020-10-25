import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {ExportExcelService} from '../../shared/services/export-excel.service';

@Component({
  selector: 'app-java-basic',
  templateUrl: './java-basic.component.html',
  styleUrls: ['./java-basic.component.scss']
})
export class JavaBasicComponent implements OnInit {

  isDesktop;
  isMobile;
  isTablet;

  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private exportExcelService: ExportExcelService
  ) {
    this.isDesktop = deviceDetectorService.isDesktop();
    this.isMobile = deviceDetectorService.isMobile();
    this.isTablet = deviceDetectorService.isTablet();
  }

  ngOnInit(): void {
  }

  writeXSLX() {
    // const ExcelJS = require('excelJS');
  }

  // add() {
    // this.exportExcelService.create();
  // }
}
