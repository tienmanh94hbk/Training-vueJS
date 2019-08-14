import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {NewPostPage} from './new-post.page';
import {RuleInputDirective} from '../../rule-input.directive';

const routes: Routes = [
    {
        path: '',
        component: NewPostPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
    declarations: [NewPostPage, RuleInputDirective]
})
export class NewPostPageModule {
}
