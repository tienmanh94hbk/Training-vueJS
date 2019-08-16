import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage {

  constructor(private router: Router) { }
  backPage() {
    this.router.navigateByUrl('/list-post');
  }
}
