import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DeviceDetectorService} from 'ngx-device-detector';

declare function j(name, phone, language): any;

@Component({
  selector: 'app-shares',
  templateUrl: './shares.component.html',
  styleUrls: ['./shares.component.scss']
})
export class SharesComponent implements OnInit {

  isDesktop;
  isMobile;
  isTablet;

  clientsForm: FormGroup;
  languages: Sourse[] = [
    {
      value: 'kz',
      viewValue: 'Казахский'
    },
    {
      value: 'ru',
      viewValue: 'Русский'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private deviceDetectorService: DeviceDetectorService
  ) {
    this.isDesktop = this.deviceDetectorService.isDesktop();
    this.isMobile = this.deviceDetectorService.isMobile();
    this.isTablet = this.deviceDetectorService.isTablet();
    this.clientsForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required,
        Validators.maxLength(30), Validators.minLength(10),
        Validators.pattern('[0-9 ()+-]*')]),
      language: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addRecord(name, phone, language) {
    j(name, phone, language);
  }
}
interface Sourse {
  value: string;
  viewValue: string;
}
