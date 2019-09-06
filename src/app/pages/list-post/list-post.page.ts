import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-list-post',
    templateUrl: './list-post.page.html',
    styleUrls: ['./list-post.page.scss'],
})

export class ListPostPage implements OnInit {

    url = 'https://jsonplaceholder.typicode.com/posts';
    public thePosts: any;
    public list;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, public http: HttpClient) {
        this.activatedRoute.queryParams.subscribe(res => {
            if (res && res.value) {
                this.list = JSON.parse(res.value);
                this.insertDataToList(this.list);
            }
        });
    }

    ngOnInit() {
        this.http.get(this.url).subscribe(data => {
            this.thePosts = data;
            this.insertDataToList(this.thePosts);
        });
    }

    newPost() {
        this.router.navigateByUrl('/new-post').then();
    }
    insertDataToList(data) {
       this.thePosts.unshift(this.list);
    }
}
