export interface AboutMe {
	name: string,
	hon: string,
	obj?: {
		favNumber?: number,
		genre?: string,
		band?: string,
		genreMovies?: string,
		movie?: string,
	},
	isActive?: boolean,
	registered?: any,
	hide?: boolean
}

//  use ? if you want to display propertie optionally 
