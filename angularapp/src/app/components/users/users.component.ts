import { Component, OnInit, ViewChild } from '@angular/core';
import { AboutMe } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
	user: AboutMe = {
		name: '',
		hon: '',
		email: '',
		hide: true
	};
	users: AboutMe[];
	showExtended: boolean = false;
	loaded: boolean = false;
	enableAdd: boolean = false;
	showUserForm: boolean = false;
	@ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
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

			this.loaded = true;

	}

	onSubmit({value, valid} : {value: AboutMe, valid: boolean}){
		if (!valid) {
			console.log("not valid")
		} else {
			this.user.registered = new Date();
			this.user.isActive = true;
			this.users.unshift(value);
			this.form.reset();
		}
	}

}
