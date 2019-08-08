import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/posts';
  public thePosts: any;
  isSelectedId: number;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.thePosts = data;
    });
  }
  setClick(i: number) {
    this.isSelectedId = i;
  }
}
