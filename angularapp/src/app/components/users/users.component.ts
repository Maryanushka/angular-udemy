import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
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

  constructor(private UserService: UserService) { 

	}

  ngOnInit() {
			
			this.UserService.getUsers().subscribe(users => {
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
			this.UserService.addUser(value);
			this.form.reset();
		}
	}

}
