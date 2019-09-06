import {NgModule} from '@angular/core';
import {PostComponent} from './post/post.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [PostComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [PostComponent]
})
export class ComponentsModule {}
