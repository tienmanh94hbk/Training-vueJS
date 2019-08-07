import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  constructor(public navCtrl: NavController, private router: Router) { }
  backPage() {
    this.router.navigateByUrl('/list-post');
  }
  ngOnInit() {
  }

}
