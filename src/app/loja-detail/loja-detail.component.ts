import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {LojasService} from '../lojas/lojas.service'

import {Loja} from '../lojas/loja/loja.model'

@Component({
  selector: 'mt-loja-detail',
  templateUrl: './loja-detail.component.html'
})
export class LojaDetailComponent implements OnInit {

  loja: Loja

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.lojasService.lojaById(this.route.snapshot.params['id'])
      .subscribe(loja => this.loja = loja)
      this.lojasService.tes()
  }

}
