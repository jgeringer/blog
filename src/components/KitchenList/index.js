import React from 'react';
import { Link } from 'gatsby';

function SingleRecipe({ recipe }) {
    console.log(`recipe: `, recipe)
    return (
        <>
            <Link to={`/kitchen/${recipe.type}/${recipe.slug}`}>
                <h2>{recipe.title}</h2>
            </Link>
        </>
    );
}

export default function RecipeList({ recipes }) {
    console.log(`recipe list: `, recipes)
    return(
        <>
            {recipes.map(recipe => (
                <SingleRecipe recipe={recipe} key={recipe.id} />
            ))}
        </>
    )
}