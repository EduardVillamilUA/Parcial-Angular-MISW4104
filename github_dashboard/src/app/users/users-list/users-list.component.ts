import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UsersListService } from './users-list.service';
import { Observable } from 'rxjs';


@Component({
  standalone: false,
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private usersListService: UsersListService) { }

  ngOnInit() {
    this.users$ = this.usersListService.getUsers();
  }

}
