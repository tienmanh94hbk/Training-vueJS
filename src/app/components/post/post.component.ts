import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/posts';
  public thePosts: any;
  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.thePosts = data;
    });
  }
  sendItem(item) {
    const navigationExtras: NavigationExtras = {
      state: {
        item
      }
    };
    this.router.navigate(['post-detail'], navigationExtras).then();
  }
}
