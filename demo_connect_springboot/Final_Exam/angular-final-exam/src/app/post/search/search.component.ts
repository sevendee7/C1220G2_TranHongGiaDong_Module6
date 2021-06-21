import { Component, OnInit } from '@angular/core';
import {PostService} from '../service/post.service';
import {RegionService} from '../service/region.service';
import {DirectionService} from '../service/direction.service';
import {Item} from '../model/item';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  postList: Item[];
  areaSearch: string = '';
  priceSearch: string = '';
  directionSearch: string = '';
  constructor( private postService: PostService,
               private regionService: RegionService,
               private directionService: DirectionService,
               private router: Router) { }

  ngOnInit(): void {
  }

  runSearch() {
    this.postService.getListAfterSearch(this.areaSearch, this.priceSearch, this.directionSearch).subscribe(postList => {
      this.postList = postList;
    }, e => {
      console.log(e);
    }, () =>
      this.router.navigateByUrl('/post/list'));
  }
}
