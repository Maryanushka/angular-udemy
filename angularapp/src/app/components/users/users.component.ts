import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
	users: AboutMe[];
	showExtended: boolean = true;
	loaded: boolean = false;
	enableAdd: boolean = true;
	showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
		// setTimeout(() => {
			this.users = [
				{
					name: "Jessica Jones",
					hon: "You bother me!",
					obj: {
						favNumber: 7,
						genre: "Rock",
						band: "MA",
						genreMovies: "Biopic",
						movie: "A private war",

					},
					isActive: true,
					registered: new Date(),
					hide: true
				},
				{
					name: "Star lord",
					hon: "Damn, you are cool!",
					obj: {
						favNumber: 33,
						genre: "Funk",
						band: "The Heavy",
						genreMovies: "CyberPunk",
						movie: "the Expance",
						
					},
					isActive: true,
					registered: new Date(),
					hide: true
				},
				{
					name: "Miles Morales",
					hon: "Hey there!",
					obj: {
						favNumber: 12,
						genre: "Hip Hop",
						band: "Griz",
						genreMovies: "Comedy",
						movie: "The Fresh Prince of Bel‑Air",

					},
					isActive: false,
					registered: new Date(),
					hide: true
				},
			];

			this.loaded = true;

	}
	
	addNewUser(user: AboutMe){
		this.users.push(user);
	}

	onSubmit(e){
		e.preventDefault();
		console.log("1")
	}

	fireEvent(e){
		console.log(e.target.value);
		console.log(e.type);
	}

}
