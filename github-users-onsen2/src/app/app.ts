import {Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Http} from '@angular/http';
import {onsNotification} from 'angular2-onsenui';
import 'rxjs/add/operator/map';

interface IGithubUser {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
}


@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.css')]
})

export class MyApp {

    public users: IGithubUser[];

    public header:string = "Github Users";

    constructor(private http: Http) {
        debugger;
        //this.user = this.users[0];
        this.http.get('https://api.github.com/users')
            .map(res => res.json())
            .subscribe(
                users => this.users = users,
                err => console.error(err),
                () => console.log('getUsers complete')
            );
    }

    selectUser(user:IGithubUser) {
        onsNotification.alert('User ' + user.login + ' has been selected');
    }
}
