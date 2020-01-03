import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UserAddComponent } from './user/user-add/user-add.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

import { AddItemComponent } from './item/add-item/add-item.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component'
import { ListItemComponent } from './item/list-item/list-item.component';
import { UpdateItemComponent } from './item/update-item/update-item.component';

import { ItemService } from './service/item.service'
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserDetailsComponent,
    UserListComponent,
    UserUpdateComponent,
    AddItemComponent,
    UpdateItemComponent,
    ItemDetailComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ItemService, 
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }