import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css'],
})
export class CommonLayoutComponent implements OnInit {
  user: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.user = sessionStorage.getItem('userName');
    this.userService.setUser(this.user);
    this.userService.$user.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
