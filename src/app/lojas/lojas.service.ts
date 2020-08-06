import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Loja} from "./loja/loja.model"
import {MenuItem} from '../loja-detail/menu-item/menu-item.model'

import {POKE_API} from '../app.api'
//import {ApiService} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class LojasService {

    constructor(private http: Http){}

    lojas(search?: string): Observable<Loja[]> {
      return this.http.get(`${POKE_API}/lojas`, {params: {q: search}})
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    lojaById(id: string): Observable<Loja>{
      return this.http.get(`${POKE_API}/lojas/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
    tes(){
      return this.getPokemon().subscribe(res => {console.log('res', res)})

    }

    getPokemon(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .map(response => response.json())


    }
     //this.api.getPokemon().subscribe(res => {console.log('res', res)})

    reviewsOfLoja(id: string): Observable<any>{
      return this.http.get(`${POKE_API}/lojas/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    menuOfLoja(id: string): Observable<MenuItem[]>{
      return this.http.get(`${POKE_API}/lojas/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

}
