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
	currentClasses: object = {};
	currentStyle: object = {};

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
					image: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/3702839.jpg",
					isActive: true,
					balance: 1000,
					registered: new Date(),
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
					image: "https://www.gannett-cdn.com/-mm-/45fef64c223bfa4533bebe5bdd65793efc626cb9/c=18-165-1588-2260/local/-/media/USATODAY/USATODAY/2014/07/01/1404244326000-The-Legendary-Star-Lord-1-Pichelli-Variant.jpeg",
					isActive: true,
					balance: 10.000,
					registered: new Date(),
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
					image: "https://i.pinimg.com/originals/81/67/de/8167de82b61a2e7a58e92784f63e9f0c.jpg",
					isActive: false,
					balance: 100,
					registered: new Date(),
				},
			];

			this.loaded = true;
		// },2000);

		
		this.setCurrentClasses();
		this.setCurrentStyles();
		
		// this.showExtended = false;

		// this.addNewUser({
		// 	hon: "Hey maan!",
		// 	keep: "Wassup",
		// 	favNumber: 9,
			// obj: {
			// 	genre: "Rap",
			// 	band: "Tupac",
			// 	genreMovies: "Boipic",
			// 	movie: "Get rich or die tryin'",

			// }
		// })

	}
	
	addNewUser(user: AboutMe){
		this.users.push(user);
	}

	setCurrentClasses() {
		this.currentClasses = {
			"btn-success": this.enableAdd
		}
	}
	setCurrentStyles() {
		this.currentStyle = {
			"padding-top": this.showExtended ? '0' : '20%'
		}
	}

}
