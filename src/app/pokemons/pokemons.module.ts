import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatGridListModule, MatListModule, MatChipList} from '@angular/material';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonDetailComponent,
    MatChipList
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class PokemonsModule { }
