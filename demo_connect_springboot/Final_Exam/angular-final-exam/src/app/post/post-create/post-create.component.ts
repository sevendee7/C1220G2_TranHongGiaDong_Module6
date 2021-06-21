import { Component, OnInit } from '@angular/core';
import {Direction} from '../model/direction';
import {Item} from '../model/item';
import {Region} from '../model/region';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DirectionService} from '../service/direction.service';
import {RegionService} from '../service/region.service';
import {Router} from '@angular/router';
import {PostService} from '../service/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  directionList: Direction[];
  regionList: Region[];
  post: Item;
  // submitted: boolean = false;
  public postForm: FormGroup;
  id: number;
  constructor(private directionService: DirectionService,
              private regionService: RegionService,
              private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      category: new FormControl(''),
      region: new FormControl(''),
      user: new FormControl(''),
      purpose: new FormControl(''),
      status: new FormControl(''),
      address: new FormControl('', Validators.required),
      area: new FormControl('', [Validators.required, Validators.min(21)]),
      direction: new FormControl(''),
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(100000000)])
    });
    this.getAllDirection();
    this.getAllRegion();
  }

  submit() {
    const post = this.postForm.value;
    this.postService.savePost(post).subscribe(() => {
      this.postForm.reset();
      this.showAlert();
    }, e => {
      console.log(e);
    }, () => this.router.navigateByUrl('/post/list'));
  }

  getAllDirection() {
    this.directionService.getAll().subscribe(directionList => {
      this.directionList = directionList;
    });
  }

  getAllRegion() {
    this.regionService.getAll().subscribe(regionList => {
      this.regionList = regionList;
    });
  }

  showAlert() {
    // @ts-ignore
    new Swal({
      position: 'top-center',
      icon: 'success',
      title: 'Your post has been created !',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
