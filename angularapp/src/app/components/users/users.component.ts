import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../models/User'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
	user: User = {
		name: '',
		hon: '',
		email: '',
		hide: true
	};
	users: User[];
	showExtended: boolean = false;
	loaded: boolean = false;
	enableAdd: boolean = false;
	showUserForm: boolean = false;
	@ViewChild('userForm') form: any;

  constructor(private dataService: DataService) { 

	}

  ngOnInit() {
			
			this.dataService.getUsers().subscribe(users => {
				this.users = users;
				this.loaded = true;
			});
			

	}

	onSubmit({value, valid} : {value: User, valid: boolean}){
		if (!valid) {
			console.log("not valid")
		} else {
			value.registered = new Date();
			value.isActive = true;
			this.dataService.addUser(value);
			this.form.reset();
		}
	}

}
