import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Recipe description', 'https://media.istockphoto.com/id/1432690812/photo/old-wooden-dock-at-the-lake-sunset-shot.webp?b=1&s=170667a&w=0&k=20&c=wu0hgDxT9wQ8fQMfR74gN_xb4AnFB795ceJ0QsyknH0=')
  ]
}
