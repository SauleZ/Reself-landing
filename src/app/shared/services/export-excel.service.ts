import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import * as myScript from '../../../../../resekf/script.js';

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor() { }

  create(name, phone, language, file) {
    // j(name, phone, language, file);
  }

}
