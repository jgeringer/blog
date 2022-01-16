import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, graphql } from 'gatsby'
import * as styles from './style.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from '@components/RichText'
import { initial } from 'lodash';

export default function Pizzas({ data }) {

    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();

    console.log(`pizza time: `, data);

    const allPizzarias = data.allPizzarias.nodes;
    const pizzarias = data.pizzarias.nodes;

    const [initialPizzas, setInitialPizzas] = useState(allPizzarias)

    const [pizzasToShow, setPizzasToShow] = useState(allPizzarias)

    console.log(`pizzarias:: `, pizzarias);

    const [pizzas, setPizzas] = useState(initialPizzas)
    const [activePizzaria, setActivePizzaria] = useState(pizzarias.length === 1 ? pizzarias[0] : null)

  
    const filterByRcCola = (e) => {
        const isChecked = e.target.checked
        if (isChecked) {
            console.log('it is checked')
            setPizzasToShow(
                initialPizzas.filter(x => x.hasRcCola === isChecked)
            )
        } else {
            setPizzasToShow(initialPizzas)
        }
    }

    const filterByArea = (e) => {
        const areaSelected = e.target.value
        console.log('areaSelected: ', areaSelected)
        if (areaSelected !== "All Areas") {
            console.log('not null')
            setPizzasToShow(
                initialPizzas.filter(x => x.area === areaSelected)
            )
        } else {
            console.log('show all pizzas')
            // setPizzas(initialPizzas)
            setPizzasToShow(initialPizzas)
        }
    }

    const applyFilters = (data) => {
        // check the value of all form data
        const values = getValues();
        console.log(values)
        console.log(initialPizzas)

        const filterHasRcCola = pizza => values.hasRcCola === true ? pizza.hasRcCola === values.hasRcCola : false || true

        const filterArea = area => values.area !== '' ? area.area === values.area : true

        setPizzasToShow(
            initialPizzas.filter(filterHasRcCola).filter(filterArea)
        )
    }

    return(
        <div className="wrapper">
            <section className='u-flex'>
                <div className='u-lg-1of4'>
                    <h2>Pizza time</h2>
                    <form onSubmit={handleSubmit(applyFilters)}>
                        <ul>
                            <li>
                                <Link to={`/pizzas`} className={styles.pizzaria}>
                                    All Pizzarias
                                </Link>
                            </li>
                            <li>
                                <ul>
                                    {allPizzarias.map(pizzaria => (
                                        <li key={pizzaria.id}>
                                            <Link to={`/pizzas/${pizzaria.slug}`} className={styles.pizzaria}>
                                            {pizzaria.title} 
                                            {pizzaria.hasRcCola && (
                                                <i> (RC)</i>
                                            )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {!activePizzaria && (
                                <>
                                    <li>
                                        {/* <input {...register("hasRcCola")} id="hasRcCola" type="checkbox" onChange={(e) => filterByRcCola(e)} /> */}
                                        <input 
                                            {...register("hasRcCola", {
                                                onChange: (e) => applyFilters(e)
                                            })}
                                            id="hasRcCola"
                                            type="checkbox"
                                        />
                                        <label for="hasRcCola">Includes RC!</label>
                                    </li>
                                    <li>
                                        <select
                                            {...register("area", {
                                                onChange: (e) => applyFilters(e)
                                            })}
                                        >
                                            {/* onChange={(e) => filterByArea(e)} */}
                                            <option value="">All Areas</option>
                                            <option value="North Side">North Side</option>
                                            <option value="South Side">South Side</option>
                                            <option value="Burbs">Burbs</option>
                                        </select>
                                    </li>
                                    {/*                                 
                                    <li>---</li>
                                    <li>Nearest</li>
                                    <li>Cut: Square Cut, Pie Cut</li>
                                    <li>My Rating</li>
                                    <li>Style: Tavern, Deep Dish, Cracker, Neopolitan</li>
                                    <li>Unique flavor: Greasy, Sweet Sauce</li>
                                    <li>Packaging: Paper bag, Box</li>
                                    <li>Cash Only</li>
                                    <li>Age: 10+, 20+, 30+, 40+</li>
                                    */}
                                </>
                            )}                        
                        </ul>
                    </form>
                    {activePizzaria && (
                        <div>
                            <p>{activePizzaria.address}</p>
                            <p>{activePizzaria.phone}</p>
                            <p>{activePizzaria.yearEstablished}</p>
                            <p>
                                <a href={activePizzaria.url} target='_blank'>
                                    Website
                                </a>
                            </p>
                            <p>{activePizzaria.hasRcCola}</p>
                            <p>{activePizzaria.cashOnly}</p>
                            <p>{activePizzaria.area}</p>
                        </div>
                    )}
                </div>
                <div className='u-lg-3of4'>
                    {activePizzaria && (
                        <div>
                            <h1>{activePizzaria.title}</h1>
                            {activePizzaria.description && (
                                <RichText body={activePizzaria.description} />
                            )}
                            <GatsbyImage className={styles.pizzaImage} alt={activePizzaria.description || activePizzaria.title} image={activePizzaria.coverPhoto.gatsbyImageData} />
                        </div>
                    )}
                    {!activePizzaria && (
                        <div className={styles.pizzaGrid}>
                            {pizzasToShow.map(pizzaria => (
                                <div key={pizzaria.id}>
                                    <Link to={`/pizzas/${pizzaria.slug}`} className={styles.link}>
                                        <GatsbyImage className={styles.pizzaImage} alt={pizzaria.description || pizzaria.title} image={pizzaria.coverPhoto.gatsbyImageData} />
                                        <span className={styles.linkText}>
                                            {/* <span>{pizza.restaurant}</span> */}
                                            <span className={styles.pizzaTitle}>{pizzaria.title}</span>
                                        </span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
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
                    images {
                        gatsbyImageData(width: 520, height: 416)
                        title
                        description
                    }
                }
                coverPhoto {
                    gatsbyImageData(width: 520, height: 416)
                    title
                    description
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
                    images {
                        gatsbyImageData(width: 520, height: 416)
                        title
                        description
                    }
                }
                coverPhoto {
                    gatsbyImageData(width: 520, height: 416)
                    title
                    description
                }
            }
        }
    }
`;