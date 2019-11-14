import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	users: User[];
	data: Observable<any>;
  constructor() { 

		this.users = [
			{
				name: "Jessica Jones",
				hon: "You bother me!",
				email: "jessica.jones@gmail.com",
				isActive: true,
				registered: new Date(),
				hide: true
			},
			{
				name: "Star lord",
				hon: "Damn, you are cool!",
				email: "star.lord@gmail.com",
				isActive: true,
				registered: new Date(),
				hide: true
			},
			{
				name: "Miles Morales",
				hon: "Hey there!",
				email: 'miles.morales@gmail.com',
				isActive: false,
				registered: new Date(),
				hide: true
			},
		];
	}

	getUsers(): Observable<User[]> {
		return of(this.users);
	}

	addUser(user: User){
		this.users.unshift(user);
	}
}
