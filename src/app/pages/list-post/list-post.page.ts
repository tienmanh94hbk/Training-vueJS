import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.page.html',
  styleUrls: ['./list-post.page.scss'],
})
export class ListPostPage {

  constructor( private router: Router) { }
  nextPage() {
    this.router.navigateByUrl('/post-detail');
  }


}
