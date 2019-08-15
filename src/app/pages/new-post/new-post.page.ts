import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.page.html',
    styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage {
    post: any;
    postForm: FormGroup;
    postObject = {
        userId: '',
        id: '',
        title: '',
        body: ''
    };
    // tslint:disable-next-line:variable-name
    error_mess = {
        userId: [
            {type: 'required', message: 'userId is required'},
            {type: 'maxlength', message: 'userId length must be lower or equal to 8 characters'}
        ],
        id: [
            {type: 'required', message: 'id is required'},
            {type: 'maxlength', message: 'id length must be lower or equal to 8 characters'}
        ],
        title: [
            {type: 'required', message: 'title is required'},
            {type: 'maxlength', message: 'title length must be lower or equal to 256 characters'},
            {type: 'pattern', message: 'title must be in characters key english'}
        ]
    };

    constructor(public formBuilder: FormBuilder, public router: Router, public modalController: ModalController) {
        this.postForm = this.formBuilder.group({
            userId: new FormControl('', Validators.compose([
                Validators.required,
                Validators.maxLength(8)
            ])),
            id: new FormControl('', Validators.compose([
                Validators.required,
                Validators.maxLength(8)
            ])),
            title: new FormControl('', Validators.compose([
                Validators.required,
                Validators.maxLength(256),
                Validators.pattern('[A-Za-z\\s]+')
            ])),
            body: new FormControl('')
        });
    }

    saveForm() {
        this.postObject.id = this.postForm.value.id;
        this.postObject.userId = this.postForm.value.userId;
        this.postObject.title = this.postForm.value.title;
        this.postObject.body = this.postForm.value.body;
        this.passObject();
    }

    passObject() {
        this.router.navigate(['/list-post'], {
            queryParams: {
                value: JSON.stringify(this.postObject)
            },
        }).then();
    }

}
