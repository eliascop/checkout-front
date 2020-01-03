import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Item } from '../../model/item.model';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  private id: string;
  private item: Item;

  constructor(private route: ActivatedRoute,private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.item = new Item();
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItem(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
  }

  updateItem() {
    this.itemService.updateItem(this.id, this.item)
      .subscribe(data => console.log(data), error => console.log(error));
    this.item = new Item();
    this.gotoList();
  }

  onSubmit() {
    this.updateItem();    
  }

  gotoList() {
    this.router.navigate(['/items']);
  }
}