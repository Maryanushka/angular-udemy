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
	image?: string,
	isActive?: boolean,
	balance?: number,
	registered?: any
}

//  use ? if you want to display propertie optionally 
