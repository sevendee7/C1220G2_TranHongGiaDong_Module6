import { Component, OnInit } from '@angular/core';
import {Post} from '../model/post';
import {PostService} from '../service/post.service';
import {RegionService} from '../service/region.service';
import {DirectionService} from '../service/direction.service';
import {NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {Direction} from '../model/direction';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postList: Post[];
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  areaSearch: string = '';
  priceSearch: string = '';
  directionSearch: string = '';
  directionList: Direction[];

  constructor(private postService: PostService,
              private regionService: RegionService,
              private directionService: DirectionService,
              config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllDirection()
  }

  getAll() {
    this.postService.getAll().subscribe(postList => {
      this.postList = postList;
      this.collectionSize = postList.length;
    });
  }

  runSearch() {
    this.postService.getListAfterSearch(this.areaSearch, this.priceSearch, this.directionSearch).subscribe(postList => {
      this.postList = postList;
      this.page = 1;
      this.collectionSize = postList.length;
    });
  }

  getAllDirection() {
    this.directionService.getAll().subscribe( directionList => {
      this.directionList = directionList;
    })
  }
}
