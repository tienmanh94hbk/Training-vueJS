import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list-post', pathMatch: 'full' },
  { path: 'list-post', loadChildren: './pages/list-post/list-post.module#ListPostPageModule' },
  { path: 'post-detail', loadChildren: './pages/post-detail/post-detail.module#PostDetailPageModule' },  { path: 'new-post', loadChildren: './pages/new-post/new-post.module#NewPostPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
