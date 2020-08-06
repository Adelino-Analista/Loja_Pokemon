import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {LojasService} from '../../lojas/lojas.service'

import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.lojasService
      .reviewsOfLoja(this.route.parent.snapshot.params['id'])
  }

}
