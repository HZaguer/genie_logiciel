import { readRecipe } from "./recipeReader.js";
import { parseRecipe } from "./recipeParser.js";
import { scaleIngredients } from "./servingsScaler.js";
import { formatAsText, formatAsHtml } from "./shoppingListFormatter.js";
import { writeFile } from "./fileWriter.js";

// format : "txt" ou "html"
export function generateShoppingList(recipePath, wantedServings, format) {
    const text = readRecipe(recipePath);
    const recipe = parseRecipe(text);
    const ingredients = scaleIngredients(recipe.ingredients, recipe.servings, wantedServings);

    if (format === "html") {
        const content = formatAsHtml(ingredients);
        writeFile("liste_courses.html", content);
    } else {
        const content = formatAsText(ingredients);
        writeFile("liste_courses.txt", content);
    }
}