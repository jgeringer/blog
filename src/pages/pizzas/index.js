import React, { useState } from 'react';
import { Link, graphql } from 'gatsby'
import * as styles from './style.module.css'

export default function Pizzas({ data }) {
    console.log(`pizza time: `, data);
    
    const allPizzarias = data.allPizzarias.nodes;
    const pizzarias = data.pizzarias.nodes;

    console.log(`pizzarias:: `, pizzarias);

    // get all pizzas from pizzarias...

    const initialPizzas = []
    pizzarias.forEach(pizza => {
        const pizzariaPizzas = pizza.pizzas
        const numOfPizzasInPizzaria = pizzariaPizzas.length
        console.log(`pizzas - `, numOfPizzasInPizzaria)
        if (numOfPizzasInPizzaria > 1) {
            pizzariaPizzas.forEach(pizzaPie => {
                pizzaPie['restaurant'] = pizza.title
                pizzaPie['hasRcCola'] = pizza.hasRcCola
                pizzaPie['pizzariaSlug'] = pizza.slug
                pizzaPie['area'] = pizza.area
                initialPizzas.push(pizzaPie)
            })
        } else {
            pizzariaPizzas[0]['restaurant'] = pizza.title
            pizzariaPizzas[0]['hasRcCola'] = pizza.hasRcCola
            pizzariaPizzas[0]['pizzariaSlug'] = pizza.slug
            pizzariaPizzas[0]['area'] = pizza.area
            initialPizzas.push(pizzariaPizzas[0])
        }
    });
    console.log('initialPizzas:::: ', initialPizzas)

    const [pizzas, setPizzas] = useState(initialPizzas)
    const [activePizzaria, setActivePizzaria] = useState(pizzarias.length === 1 ? pizzarias[0] : null)

  
    const filterByRcCola = (e) => {
        const isChecked = e.target.checked
        if (isChecked) {
            setPizzas(
                initialPizzas.filter(x => x.hasRcCola === isChecked)
            )
        } else {
            setPizzas(initialPizzas)
        }
    }

    const filterByArea = (e) => {
        const areaSelected = e.target.value
        console.log('areaSelected: ', areaSelected)
        if (areaSelected !== "All Areas") {
            console.log('not null')
            setPizzas(
                initialPizzas.filter(y => y.area === areaSelected)
            )
        } else {
            console.log('show all pizzas')
            setPizzas(initialPizzas)
        }
    }

    return(
        <div className="wrapper">
            <h2>Pizza time</h2>
            <section className='u-flex'>
                <div className='u-lg-1of4'>
                    Pizzaria filters:
                    <ul>
                        <li>
                            <Link to={`/pizzas`} className={styles.pizzaria}>
                                All Pizzarias
                            </Link>
                            {allPizzarias.map(pizzaria => (
                                <div key={pizzaria.id}>
                                    <Link to={`/pizzas/${pizzaria.slug}`} className={styles.pizzaria}>
                                    {pizzaria.title} 
                                    {pizzaria.hasRcCola && (
                                        <i> (RC)</i>
                                    )}
                                    </Link>
                                </div>
                            ))}
                        </li>
                        <li> --- </li>

                        {!activePizzaria && (
                            <>
                                <li>
                                    <input type="checkbox" id="hasRcCola" name="hasRcCola" onChange={(e) => filterByRcCola(e)} />
                                    <label for="hasRcCola">Includes RC</label>
                                </li>
                                <li>
                                    <select onChange={(e) => filterByArea(e)}>
                                        <option>All Areas</option>
                                        <option value="North Side">North Side</option>
                                        <option value="South Side">South Side</option>
                                        <option value="Burbs">Burbs</option>
                                    </select>
                                </li>
                                <li>---</li>
                                <li>Nearest</li>
                                <li>Cut: Square Cut, Pie Cut</li>
                                <li>My Rating</li>
                                <li>Style: Tavern, Deep Dish, Cracker, Neopolitan</li>
                                <li>Unique flavor: Greasy, Sweet Sauce</li>
                                <li>Packaging: Paper bag, Box</li>
                                <li>Cash Only</li>
                                <li>Age: 10+, 20+, 30+, 40+</li>
                            </>
                        )}                        
                    </ul>
                </div>
                <div className='u-lg-3of4'>
                    <p className={styles.tmnt}>
                        <img src="tmnt-pizza.gif" />
                        COMING SOON
                    </p>
                    {activePizzaria && (
                        <div>
                            <p>Pizzaria details:
                                Address: {activePizzaria.address}
                            </p>
                        </div>
                    )}
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
                description {
                    raw
                }
                hasRcCola
                location {
                    lat
                    lon
                }
                phone
                url
                yearEstablished
                address
                area
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
                description {
                    raw
                }
                hasRcCola
                location {
                    lat
                    lon
                }
                phone
                url
                yearEstablished
                address
                area
                pizzas {
                    id
                    title
                    slug
                }
            }
        }
    }
`;