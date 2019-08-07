import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.page.html',
  styleUrls: ['./list-post.page.scss'],
})
export class ListPostPage implements OnInit {

  constructor(public navCtrl: NavController, private router: Router) { }
  nextPage() {
    this.router.navigateByUrl('/post-detail');
  }
  ngOnInit() {
  }

}
