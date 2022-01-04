import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function SinglePizzaPage({ data: { pizza } }) {
    console.log(`individual pizza: `, pizza);
    // const pizza = data.pizza
    const pizzaria = pizza.pizzaria[0].title

    return (
        <div>
            <div className="wrapper">
                <h1>{pizzaria} / {pizza.title}</h1>
            </div>
            <GatsbyImage alt={pizza.description || pizza.title} image={pizza.images[0].gatsbyImageData} />
        </div>
    );
}

export const query = graphql`
    query($slug: String!) {
        pizza: contentfulPizza(slug: { eq: $slug }) {
            slug
            title
            images {
                gatsbyImageData(width: 1440, height: 1440)
                title
                description
            }
            pizzaria {
                id
                title
                slug
            }
        }
    }
`;