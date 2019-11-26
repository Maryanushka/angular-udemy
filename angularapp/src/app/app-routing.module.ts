import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'users', component: UsersComponent},
	{ path: 'posts', component: PostComponent},
	{ path: 'post/:id', component: PostDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
