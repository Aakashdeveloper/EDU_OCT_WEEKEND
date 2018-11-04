import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { FormposterService } from '../services/formposter.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _FormposterService: FormposterService) { }

  langugaes: any[] = ['Angular', 'React', 'NodeJs', 'GOlang'];

  model = new Employee('John', 'andrew', 'a@a.com ', '12345678', true, 'male', 'Angular');
  hasCodeLangError: Boolean = false;

  firstToUpper(value: string): void {
    if (value.length > 8) {
      // alert('enter value less than 8');
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    } else {
      this.model.firstName = value;
    }
  }

  validateCodeLang(event): void {
    if (this.model.codelang === 'default') {
      this.hasCodeLangError = true;
    } else {
      this.hasCodeLangError = false;
    }
  }

  submitForm(form: NgForm): void {
    this._FormposterService.postEmployee(form.value)
        .subscribe((data) => console.log('success', data));
    // console.log(form.value);
  }

  ngOnInit() {
  }

}


/*
ng-dirty    ng- touched  ng-invalid
ng-pristine ng-untouched ng-valid
*/

