import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  private user: User = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.addUser(this.user).subscribe(data => console.log(data),error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}