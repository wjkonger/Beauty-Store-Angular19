import { Component } from '@angular/core';

@Component({
  selector: 'app-address',
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  provinces = [
    { "key": "AB", "value": "Alberta" },
    { "key": "BC", "value": "British Columbia" },
    { "key": "MB", "value": "Manitoba" },
    { "key": "NB", "value": "New Brunswick" },
    { "key": "NL", "value": "Newfoundland and Labrador" },
    { "key": "NS", "value": "Nova Scotia" },
    { "key": "ON", "value": "Ontario" },
    { "key": "PE", "value": "Prince Edward Island" },
    { "key": "QC", "value": "Quebec" },
    { "key": "SK", "value": "Saskatchewan" },
    { "key": "NT", "value": "Northwest Territories" },
    { "key": "NU", "value": "Nunavut" },
    { "key": "YT", "value": "Yukon" }
  ]
}
