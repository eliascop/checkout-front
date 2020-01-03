import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

import { ItemService } from "../../service/item.service";
import { Item } from "../../model/item.model";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  private items: Observable<Item[]>;

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.items = this.itemService.getItemList();
  }

  deleteItem(id: string) {
    this.itemService.deleteItem(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  itemDetail(id: string){
    this.router.navigate(['item-detail', id]);
  }
  itemUpdate(id: string){
    this.router.navigate(['item-update', id]);
  }
}
