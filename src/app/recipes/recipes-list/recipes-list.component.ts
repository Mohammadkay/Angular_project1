import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe("this is a test recipe","this is just a test ","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505")
]
  constructor() { }

  ngOnInit(): void {
  }

}
