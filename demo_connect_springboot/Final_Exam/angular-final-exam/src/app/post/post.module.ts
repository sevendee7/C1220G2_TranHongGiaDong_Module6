import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostCreateComponent } from './post-create/post-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostListComponent} from './post-list/post-list.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    PostCreateComponent,
    PostListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FormsModule
  ]
})
export class PostModule { }
