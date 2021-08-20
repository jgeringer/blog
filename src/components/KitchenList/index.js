import React from 'react';
import { Link } from 'gatsby';

function SingleRecipe({ recipe }) {
    return (
        <>
            <Link to={`/kitchen/recipe/${recipe.slug}`}>
                <h2>{recipe.title}</h2>
            </Link>
        </>
    );
}

export default function PizzaList({ recipes }) {
    return(
        <>
            {recipes.map(recipe => (
                <SingleRecipe recipe={recipe} key={recipe.id} />
            ))}
        </>
    )
}