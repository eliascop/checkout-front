import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

import { AddItemComponent } from './item/add-item/add-item.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ListItemComponent } from './item/list-item/list-item.component';
import { UpdateItemComponent } from './item/update-item/update-item.component';


const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'items', component: ListItemComponent },
  { path: 'users', component: UserListComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'add-user', component: UserAddComponent },
  { path: 'user-update/:id', component: UserUpdateComponent },
  { path: 'item-update/:id', component: UpdateItemComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'user-detail/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }