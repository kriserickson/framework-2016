import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {IGithubUser} from "../users/users";

@Component({
    templateUrl: 'build/pages/user/user.html'
})
export class UserPage {

    public user: IGithubUser;

    constructor(public navCtrl: NavController, navParams:NavParams) {
        this.user = navParams.get('user');
    }


}
