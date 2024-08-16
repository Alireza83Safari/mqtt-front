import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { User } from 'src/app/core/models/auth';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = [
    'address',
    'id',
    'email',
    'username',
    'password',
    'name',
    'phone',
    'action',
  ];

  users!: User[];

  constructor(private userService: UserService, public dialog: MatDialog) {}

  handleAction(element: PeriodicElement) {
    console.log('Action clicked for:', element);
  }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe((data) => console.log((this.users = data)));
  }
  dataSource = this.users;
}
