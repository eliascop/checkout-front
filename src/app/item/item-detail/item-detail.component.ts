import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from '../../model/item.model';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  
  private id: string;
  private item: Item;

  constructor(private route: ActivatedRoute,private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.item = new Item();
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItem(this.id).subscribe(data => {
        console.log(data) 
        this.item = data;
    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['items']);
  }
}