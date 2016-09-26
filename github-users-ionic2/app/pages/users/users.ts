import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {UserPage} from "../user/user";

export interface IGithubUser {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
}

@Component({
  templateUrl: 'build/pages/users/users.html'
})
export class UsersPage {

    public users: IGithubUser[] = [];

  constructor(public navCtrl: NavController,private http:Http) {

      this.http.get('https://api.github.com/users')
          .map(res => res.json())
          .subscribe(
              users => this.users = users,
              err => console.error(err),
              () => console.log('getUsers complete')
          );
  }

  public selectUser(user:IGithubUser):void{
      this.navCtrl.push(UserPage, {user: user})
  }
}
