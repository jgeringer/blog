import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './style.module.css'

function SingleRecipe({ recipe }) {
    // console.log(`recipe: `, recipe)
    return (
        <div className={styles.card}>
            {/* <label className={styles.checkboxContainer}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </label> */}
            <Link to={`/kitchen/${recipe.type}/${recipe.slug}`}>
                {recipe.image && (
                    <GatsbyImage alt="" image={recipe.image.gatsbyImageData} className={styles.recipeImage} />
                )}
                <div>
                    <h4>{recipe.title}</h4>
                </div>
            </Link>
        </div>
    );
}

export default function RecipeList({ recipes }) {
    // Sort recipes by ABC
    recipes.sort((a, b) => a.title.localeCompare(b.title))

    return(
        <>
            <section className={styles.section}>
                {recipes.map(recipe => (
                    <SingleRecipe recipe={recipe} key={recipe.id} />
                ))}
            </section>
        </>
    )
}