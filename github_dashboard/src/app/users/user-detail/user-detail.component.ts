import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  standalone: false,
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() userDetail!: User;

  constructor() { }

  ngOnInit() {
  }

}
