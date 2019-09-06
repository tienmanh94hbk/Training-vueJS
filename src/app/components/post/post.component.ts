import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavigationExtras, Router} from '@angular/router';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent {
    // tslint:disable-next-line:no-input-rename
    @Input('list-data') thePosts;

    // tslint:disable-next-line:max-line-length
    constructor(public http: HttpClient, private router: Router) {
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
