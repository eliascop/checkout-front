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
  submitted = false;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {}

  newUser(): void {
    this.submitted = false;
    this.item = new Item();
  }

  save() {
    this.itemService.addItem(this.item).subscribe(data => console.log(data),error => console.log(error));
    this.item = new Item();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/items']);
  }
} 