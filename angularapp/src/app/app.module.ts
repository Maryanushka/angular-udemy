import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.components';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
		AppComponent,
		UserComponent,
		UsersComponent,
		NavbarComponent,
		PostComponent,
		
		
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
  ],
	providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
