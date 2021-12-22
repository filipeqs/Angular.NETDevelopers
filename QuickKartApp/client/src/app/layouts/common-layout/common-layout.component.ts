import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css'],
})
export class CommonLayoutComponent implements OnInit {
  user: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = sessionStorage.getItem('userName');
  }

  logOut() {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userRole');
    this.user = null;
    this.router.navigate(['']);
  }
}
