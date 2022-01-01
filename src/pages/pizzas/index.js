import React from 'react'
import { Link, graphql } from 'gatsby'
import * as styles from './style.module.css'

export default function Pizzas({ data }) {
    console.log(`pizza time: `, data);
    const allPizzarias = data.allPizzarias.nodes;
    const pizzarias = data.pizzarias.nodes;

    console.log(`pizzarias:: `, pizzarias);

    // get all pizzas from pizzarias...

    const pizzas = []
    pizzarias.forEach(pizza => {
        const pizzariaPizzas = pizza.pizzas
        const numOfPizzasInPizzaria = pizzariaPizzas.length
        console.log(`pizzas - `, numOfPizzasInPizzaria)
        if (numOfPizzasInPizzaria > 1) {
            pizzariaPizzas.forEach(pizzaPie => {
                pizzaPie['restaurant'] = pizza.title
                pizzaPie['hasRcCola'] = pizza.hasRcCola
                pizzaPie['pizzariaSlug'] = pizza.slug
                pizzas.push(pizzaPie)
            })
        } else {
            pizzariaPizzas[0]['restaurant'] = pizza.title
            pizzariaPizzas[0]['hasRcCola'] = pizza.hasRcCola
            pizzariaPizzas[0]['pizzariaSlug'] = pizza.slug
            pizzas.push(pizzariaPizzas[0])
        }
    });
    console.log('pizzas:::: ', pizzas)
  
    const filterByRcCola = (val) => {
        console.log('changed')
        console.log(val)
        pizzas.filter(x => x.hasRcCola === val)
    }

    return(
        <div className="wrapper">
            <h2>Pizza time</h2>
            <section className='u-flex'>
                <div className='u-lg-1of4'>
                    Pizza filters:
                    <ul>
                        <li>Topping: Sausage, Crust, Grease</li>
                        <li>Location: South Side, North Side, Burbs</li>
                        <li>Nearest</li>
                        <li>Cut: Square Cut, Pie Cut</li>
                        <li>My Rating</li>
                        <li>Style: Tavern, Deep Dish, Cracker, Neopolitan</li>
                        <li>Packaging: Paper bag, Box</li>
                        <li>Cash Only</li>
                        <li>Includes RC:
                            <br />
                            <form>
                                <input type="radio" id="rc_no" name="hasRcCola" value="false" onChange={filterByRcCola(false)} />
                                <label for="rc_no">NO</label><br />
                                <input type="radio" id="rc_yes" name="hasRcCola" value="true" onChange={filterByRcCola(true)} />
                                <label for="rc_yes">YES</label><br />
                            </form>
                        </li>
                        <li>Age: 10+, 20+, 30+, 40+</li>
                        <li>Eatability factor: (score decreases after x minutes)</li>
                        <li>
                            <select>
                                <option>Geos</option>
                                <option>Palermos</option>
                                <option>Geovanis</option>
                            </select>
                            <br />
                            <Link to={`/pizzas`}>
                                Pizzaria: ALL
                            </Link>
                            {allPizzarias.map(pizzaria => (
                                <div key={pizzaria.id}>
                                    <Link to={`/pizzas/${pizzaria.slug}`}>
                                    Pizzaria: {pizzaria.title} 
                                    {pizzaria.hasRcCola && (
                                        <i> (RC)</i>
                                    )}
                                    </Link>
                                </div>
                            ))}
                        </li>
                    </ul>
                </div>
                <div className='u-lg-3of4'>
                    <p className={styles.tmnt}>
                        <img src="tmnt-pizza.gif" />
                        COMING SOON
                    </p>
                    <p>Product Card:</p>
                    <ul>
                        <li>Photo</li>
                        <li>Icons for each of the filters</li>
                        <li>Phone, Address</li>
                    </ul>
                    <div>
                        {pizzas.map(pizza => (
                            <div key={pizza.id}>
                                <Link to={`/pizzas/${pizza.pizzariaSlug}/${pizza.slug}`}>
                                    Pizza: {pizza.restaurant} - {pizza.title} : {pizza.slug}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}


export const query = graphql`
    query PizzariasQuery($slug: [String]) {
        allPizzarias: allContentfulPizzaria {
            totalCount
            nodes {
                id
                title
                slug
                cashOnly
                hasRcCola
                pizzas {
                    id
                    title
                    slug
                }
            }
        }
        pizzarias: allContentfulPizzaria(filter: {slug: {in: $slug}}) {
            totalCount
            nodes {
                id
                title
                slug
                cashOnly
                hasRcCola
                pizzas {
                    id
                    title
                    slug
                }
            }
        }
    }
`;