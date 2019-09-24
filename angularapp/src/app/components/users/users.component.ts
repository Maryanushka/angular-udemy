import { Component, OnInit } from '@angular/core';
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
		obj: {
			favNumber: null,
			genre: '',
			band: '',
			genreMovies: '',
			movie: '',
		},
		hide: true
	};
	users: AboutMe[];
	showExtended: boolean = false;
	loaded: boolean = false;
	enableAdd: boolean = false;
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
	
	addNewUser(){
		this.user.registered = new Date();
		this.user.isActive = true;
		this.users.unshift(this.user);
		this.user = {
			name: '',
			hon: '',
			obj: {
				favNumber: null,
				genre: '',
				band: '',
				genreMovies: '',
				movie: '',
			}}
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
