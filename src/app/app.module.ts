import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { UsersListComponent } from './componets/users-list/users-list.component';
import { UserComponent } from './componets/user/user.component';
import { UserAddComponent } from './componets/user-add/user-add.component';
import { DataService } from './services/data.service';
import { UserAddListServiceComponent } from './componets/user-add-list-service/user-add-list-service.component';
import { UserViewListServiceComponent } from './componets/user-view-list-service/user-view-list-service.component';
import { UserPagServiceComponent } from './componets/user-pag-service/user-pag-service.component';
import { UserServiceComponent } from './componets/user-service/user-service.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersListComponent,
    UserComponent,
    UserAddComponent,
    UserAddListServiceComponent,
    UserViewListServiceComponent,
    UserPagServiceComponent,
    UserServiceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
