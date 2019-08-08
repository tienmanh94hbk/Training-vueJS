import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostDetailPage } from './post-detail.page';
import {PostComponent} from '../../components/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostDetailPage, PostComponent]
})
export class PostDetailPageModule {}
