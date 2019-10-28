import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe(
      "this is a test",
      "simply test",
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
    ),
    new Recipe(
      "this is a 2nd test",
      "simply 2nd test",
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
