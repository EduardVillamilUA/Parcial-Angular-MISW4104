import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  standalone: false,
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> = []

  constructor(private usersService: UsersService) { }

  getUsers() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }

  ngOnInit() {
    this.getUsers()
  }

}
