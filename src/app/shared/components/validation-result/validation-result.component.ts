import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-result',
  templateUrl: './validation-result.component.html',
  styleUrls: ['./validation-result.component.css']
})
export class ValidationResultComponent implements OnInit {

  @Input() validationResults: string[] = [];
  @Input() isNotValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
