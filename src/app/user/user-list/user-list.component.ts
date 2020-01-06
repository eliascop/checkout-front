import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UserService } from "../../service/user.service";
import { User } from "../../model/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: Observable<User[]>;
  submitted = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.submitted = false;
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUserList();
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
        this.submitted = true;
        },
        error => alert("An error had ocorred")
      );
  }

  updateUser(id: string){
    this.router.navigate(['user-update', id])
  }

  userDetail(id: string){
    this.router.navigate(['user-detail', id]);
  }
}
