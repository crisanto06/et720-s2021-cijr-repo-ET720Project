import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  stars = ['*','**','***','****','*****'];
  
   userModel = new User('John Smith', 'johnsmith@test.com', 1234567890, true, '', 'Commets');

  constructor() { }

  ngOnInit(): void {
  }

}
