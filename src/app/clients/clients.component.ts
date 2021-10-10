import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientList = [
    {clientId: 10, firstName: 'Prasanna', lastName: 'Kumar'},
    {clientId: 11, firstName: 'Suresh', lastName: 'Kumar'},
    {clientId: 12, firstName: 'Pravenn', lastName: 'Kumar'},
    {clientId: 13, firstName: 'Santhosh', lastName: 'Kumar'},
    {clientId: 14, firstName: 'Manoj', lastName: 'Kumar'},
    {clientId: 15, firstName: 'Vijay', lastName: 'Kumar'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
