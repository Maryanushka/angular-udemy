import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../../models/User'; 

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.components.scss'],
	
})

export class UserComponent implements OnInit{

	aboutMe: AboutMe;


	constructor(){
		
	}
	ngOnInit() {
		// this.aboutMe = {
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