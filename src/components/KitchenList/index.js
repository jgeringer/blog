import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import styles from './style.module.css'

function SingleRecipe({ recipe }) {
    console.log(`recipe: `, recipe)
    return (
        <>
            <Link to={`/kitchen/${recipe.type}/${recipe.slug}`}>
                {recipe.image && (
                    <Img alt="" fluid={recipe.image.fluid} />
                )}
                <div>
                    <h4>{recipe.title}</h4>
                    <span>{recipe.type}</span>
                </div>
            </Link>
        </>
    );
}

export default function RecipeList({ recipes }) {
    console.log(`recipe list: `, recipes)
    return(
        <section className={styles.section}>
            {recipes.map(recipe => (
                <SingleRecipe recipe={recipe} key={recipe.id} />
            ))}
        </section>
    )
}