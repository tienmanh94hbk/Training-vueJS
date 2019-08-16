import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.page.html',
  styleUrls: ['./list-post.page.scss'],
})

  export class ListPostPage implements OnInit {
  constructor(public http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/posts';
  thePosts: any;
  isSelectedId: number;

  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.thePosts = data;
    });
  }

  setClick(i: number) {
    this.isSelectedId = i;
  }
}
