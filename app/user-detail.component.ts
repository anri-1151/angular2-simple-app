import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserService } from './user.service';
import { User } from './user';

@Component({
    selector: 'my-user-detail',
    templateUrl: 'app/user-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class UserDetailComponent implements OnInit {
    @Input()
    user: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.userService.getUser(id).then(user => this.user = user);
        });
    }

    goBack(): void {
        window.history.back();
    }

}
