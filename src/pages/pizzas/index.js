import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, graphql } from 'gatsby'
import * as styles from './style.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from '@components/RichText'
import { act } from 'react-test-renderer';

export default function Pizzas({ data }) {

    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();

    console.log(`pizza time: `, data);

    const allPizzarias = data.allPizzarias.nodes;
    const pizzarias = data.pizzarias.nodes;

    allPizzarias
        .sort((a, b) => (a.yearEstablished > b.yearEstablished) ? 1 : -1)

    const [initialPizzas, setInitialPizzas] = useState(allPizzarias)

    const [pizzasToShow, setPizzasToShow] = useState(allPizzarias)

    const [initialYearEstablishedOld, setInitialYearEstablishedOld] = useState(true)
    const [initialYearEstablishedNew, setInitialYearEstablishedNew] = useState(false)

    console.log(`initialPizzas:: `, initialPizzas);

    // all active styles...
    const allActiveStyles = allPizzarias.map(style => style.styles);

    // merge all active styles into one array
    const activeStylesFlattened = [].concat.apply([], allActiveStyles);

    // remove duplicates from array...
    const activeStyles = [...new Set(activeStylesFlattened)]
    console.log('styles: ', activeStyles)
    
    const [activePizzaria, setActivePizzaria] = useState(pizzarias.length === 1 ? pizzarias[0] : null)
    console.log('ACTIVE PIZZARIA: ', activePizzaria)

    const applyFilters = (data) => {
        // check the value of all form data
        const values = getValues();

        // check the value of all of the filters...
        const filterArea = area => values.area !== '' ? area.area === values.area : true;

        const filterHasRcCola = pizza => values.hasRcCola === true ? pizza.hasRcCola === values.hasRcCola : false || true;

        const filterByStyleThinCrust = (pizza) => 
            values['Thin Crust'] === true ? pizza.styles.includes('Thin Crust') === values['Thin Crust'] : false || true;

        const filterByStyleStuffed = (pizza) => 
            values['Stuffed'] === true ? pizza.styles.includes('Stuffed') === values['Stuffed'] : false || true;

        const filterByStyleDeepDish = (pizza) => 
            values['Deep Dish'] === true ? pizza.styles.includes('Deep Dish') === values['Deep Dish'] : false || true;

        const filterByStyleSpecialty = (pizza) => 
            values['Specialty'] === true ? pizza.styles.includes('Specialty') === values['Specialty'] : false || true;

        const filterByStylePan = (pizza) => 
            values.Pan === true ? pizza.styles.includes('Pan') === values.Pan : false || true;

        const filterByGoodCold = (pizza) => 
            values.goodCold === true ? pizza.goodCold === values.goodCold : false || true;

        const sortByOldest = values.yearEstablished === 'oldest' ? true : false;
        if (sortByOldest) {
            setInitialYearEstablishedOld(true)
            setInitialYearEstablishedNew(false)
        } else {
            setInitialYearEstablishedOld(false)
            setInitialYearEstablishedNew(true)
        }

        setPizzasToShow(
            initialPizzas
                .sort((a, b) => sortByOldest ? (a.yearEstablished > b.yearEstablished) : (a.yearEstablished < b.yearEstablished) ? 1 : -1)
                .filter(filterHasRcCola)
                .filter(filterArea)
                .filter(filterByStyleThinCrust)
                .filter(filterByStylePan)
                .filter(filterByStyleStuffed)
                .filter(filterByStyleDeepDish)
                .filter(filterByStyleSpecialty)
                .filter(filterByGoodCold)
        )
    }

    return(
        <div className="wrapper">
            <section className='u-flex'>
                <div className='u-lg-1of4'>
                    <div className={styles.filters}>
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
                                            <input 
                                                {...register("goodCold", {
                                                    onChange: (e) => applyFilters(e)
                                                })}
                                                id="goodCold"
                                                type="checkbox"
                                            />
                                            <label for="goodCold">Good Cold</label>
                                        </li>
                                        <li>
                                            <select
                                                {...register("area", {
                                                    onChange: (e) => applyFilters(e)
                                                })}
                                            >
                                                <option value="">All Areas</option>
                                                <option value="North Side">North Side</option>
                                                <option value="South Side">South Side</option>
                                                <option value="Burbs">Burbs</option>
                                            </select>
                                        </li>
                                        <li>
                                            <ul>
                                                Offerings: <br />
                                                {activeStyles.map(style => (
                                                    <li>
                                                        <input 
                                                            {...register(style, {
                                                                onChange: (e) => applyFilters(e)
                                                            })}
                                                            id={style}
                                                            type="checkbox"
                                                        />
                                                        <label for={style}>{style}</label>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                        <li>
                                            Sort by est.
                                            <div onClick={(e) => applyFilters(e)}>Oldest</div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="yearEstablishedOldest"
                                                    name="yearEstablished"
                                                    value="oldest"
                                                    {...register("yearEstablished", {
                                                        onChange: (e) => applyFilters(e)
                                                    })}
                                                    checked={initialYearEstablishedOld}
                                                />
                                                <label for="yearEstablishedOldest">Oldest</label>
                                                <br />
                                                <input
                                                    type="radio"
                                                    id="yearEstablishedNewest"
                                                    name="yearEstablished"
                                                    value="newest"
                                                    {...register("yearEstablished", {
                                                        onChange: (e) => applyFilters(e)
                                                    })}
                                                    checked={initialYearEstablishedNew}
                                                />
                                                <label for="yearEstablishedNewest">Newest</label>
                                            </div>
                                        </li>
                                        {/*
                                            <li>Nearest</li>
                                            <li>Cut: Square Cut, Pie Cut</li>
                                            <li>My Rating</li>
                                            <li>Unique flavor: Greasy, Sweet Sauce</li>
                                            <li>Packaging: Paper bag, Box</li>
                                            <li>Cash Only</li>
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
                </div>
                <div className='u-lg-3of4'>
                    {activePizzaria && (
                        <div>
                            <h1>{activePizzaria.title}</h1>
                            {activePizzaria.description && (
                                <RichText body={activePizzaria.description} />
                            )}
                            <GatsbyImage className={styles.pizzaImage} alt={activePizzaria.description || activePizzaria.title} image={activePizzaria.coverPhoto.gatsbyImageData} />

                            {activePizzaria.pizzas.map(pizza => (
                                pizza.images.map(image => (
                                    <GatsbyImage image={image.gatsbyImageData} />
                                ))
                            ))}
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
                                            <span className={styles.pizzaTitle}>{pizzaria.title} - {pizzaria.yearEstablished}</span>
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
                styles
                hasRcCola
                goodCold
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
                goodCold
                styles
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