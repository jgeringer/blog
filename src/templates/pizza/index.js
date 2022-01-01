import React from 'react'
import { Link, graphql } from 'gatsby'

export default function SinglePizzaPage({ data: { pizza } }) {
    console.log(`individual pizza: `, pizza);
    // const pizza = data.pizza
    const pizzaria = pizza.pizzaria[0].title

    return (
        <div>
            <p>Pizzaria: {pizzaria} | {pizza.slug}</p>
            <p><strong>Individual pizza page! title: {pizza.title}</strong></p>
        </div>
    );
}

export const query = graphql`
    query($slug: String!) {
        pizza: contentfulPizza(slug: { eq: $slug }) {
            slug
            title
            pizzaria {
                id
                title
                slug
            }
        }
    }
`;