import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'; 

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.components.scss'],
	
})

export class UserComponent implements OnInit{

	User: User;


	constructor(){
		
	}
	ngOnInit() {
		// this.User = {
		// 	hon: "Honey you are great!",
		// 	keep: "Keep going",
		// 	favNumber: 7,
		// 	obj: {
		// 		genre: "Rock",
		// 		band: "MA",
		// 		genreMovies: "CyberPunk",
		// 		movie: "the Expance",

		// 	}
		// }
	}
}