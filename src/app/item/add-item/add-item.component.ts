import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Item } from '../../model/item.model';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  private item: Item = new Item();
  errorMessage:string;
  submitted = false;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {}

  save() {
    this.itemService.addItem(this.item)
      .subscribe(
        data => {
          console.log(data)
          this.submitted = true;
          this.item = new Item();
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
    this.router.navigate(['/items']);
  }
} 