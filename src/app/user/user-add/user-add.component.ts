import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  private user: User = new User();
  errorMessage: string;
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}

  save() {
    this.userService.addUser(this.user)
      .subscribe(
        data => {
          console.log(data)
          this.submitted = true;
          this.user = new User();
        },
        error => {
          this.errorMessage = error.error
        }
      );
  }

  onSubmit() {
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}