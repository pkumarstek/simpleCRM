import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  success_msg = false;
  shop = 'mobile';
  tax = 15;

  bgColor = 'purple';
  txtColor = 'blue';
  contacts = [
    {
      'firstName': 'Prasanna',
      'lastName' : 'Kumar',
      'contactId': 1234
    },
    {
      'firstName': 'Jampa',
      'lastName' : 'Raja',
      'contactId': 234
    },
    {
      'firstName': 'Siva',
      'lastName' : 'Syahaar',
      'contactId':4231
    },
    {
      'firstName': 'Prasad',
      'lastName' : 'Kumar',
      'contactId': 1234
    },
    {
      'firstName': 'Praveen',
      'lastName' : 'Raja',
      'contactId': 1234
    },
    {
      'firstName': 'Sunder',
      'lastName' : 'Syahaar',
      'contactId': 1234
    },
    {
      'firstName': 'Pant',
      'lastName' : 'Kumar',
      'contactId': 1234
    },
    {
      'firstName': 'Jay',
      'lastName' : 'Raja',
      'contactId': 1234
    },
    {
      'firstName': 'Sivam',
      'lastName' : 'Syahaar',
      'contactId': 1234
    }
  ]
}
