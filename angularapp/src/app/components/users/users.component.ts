import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../../models/User'; 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
	users: AboutMe[];

  constructor() { }

  ngOnInit() {
		this.users = [
			{
				hon: "Honey you are great!",
				keep: "Keep going",
				favNumber: 7,
				obj: {
					genre: "Rock",
					band: "MA",
					genreMovies: "CyberPunk",
					movie: "the Expance",

				}
			},
			{
				hon: "Damn you are cool!",
				keep: "Nice tshirt",
				favNumber: 33,
				obj: {
					genre: "Funk",
					band: "The Heavy",
					genreMovies: "horror",
					movie: "IT",

				}
			},
			{
				hon: "Hey there!",
				keep: "How you doin",
				favNumber: 12,
				obj: {
					genre: "Electronic",
					band: "Synckro",
					genreMovies: "Drama",
					movie: "Green Line",

				}
			},
		]
		this.addNewUser({
			hon: "Hey maan!",
			keep: "Wassup",
			favNumber: 9,
			obj: {
				genre: "Rap",
				band: "Tupac",
				genreMovies: "Boipic",
				movie: "Get rich or die tryin'",

			}
		})

	}
	
	addNewUser(user: AboutMe){
		this.users.push(user);
	}

}
