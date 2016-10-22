import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { User } from './user';
import { UserService } from './user.service';


@Component({
    selector: 'my-users',
    templateUrl: 'app/users.component.html',
    styleUrls:  ['app/users.component.css']
})

export class UsersComponent {
    users: User[];
    selectedUser: User;

    constructor(
        private userService: UserService,
        private router: Router
    ){}

    getAllUsers(): void {
        this.userService.getAllUsers().then(users => this.users = users);
    }

    ngOnInit(): void {
        this.getAllUsers();
    }

    onSelect(user: User): void {
        this.selectedUser = user;
    }

    gotoDetail(): void {
        console.log(this.selectedUser);
        this.router.navigate(['/user-detail', this.selectedUser._id]);
    }
}
