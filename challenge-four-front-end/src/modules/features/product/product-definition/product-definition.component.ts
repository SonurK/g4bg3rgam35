import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../../services/request.service';
import { RequestType, RequestURL } from '../../../../models/request.model';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-definition',
  templateUrl: './product-definition.component.html',
  styleUrls: ['./product-definition.component.scss']
})
export class ProductDefinitionComponent implements OnInit {

  public pokedex: Array<any>

  constructor(
    public requestService: RequestService,
    private httpClient: HttpClient,
  ) {
    this.pokedex = new Array();
  }

  ngOnInit(): void {
    
    this.getPokemonAbility();
    this.getPokemon();
    this.getPokedex();
  }

  getPokemonAbility() {
    this.httpClient.get("https://pokeapi.co/api/v2/ability/4/")
      .subscribe((data: any[]) => {
        console.error("subscribe");
      })
  }

  getPokemon() {
    this.httpClient.get("https://pokeapi.co/api/v2/pokemon/ditto/")
      .toPromise()
      .then((responseData: any) => {
        console.error("toPromise");
        console.info("responseData", responseData);
      }).catch((errorResponseData) => {
        console.error("errorResponseData", errorResponseData);
      })
  }

  getPokedex() {
    this.requestService.request(RequestType.GET, RequestURL.POKEMON_POKEDEX, null, null)
      .then((pokedexData: any) => {
        console.error("request");
        console.info("pokedexData", pokedexData);
        this.pokedex = pokedexData.body?.results;
      })
      .catch((pokedexError: any) => {
        console.error("pokedexError", pokedexError);
      })
  }

}
