import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, graphql } from 'gatsby'
import * as styles from './style.module.css'

import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from '@components/RichText'

export default function Pizzas({ data }) {

    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();

    const allPizzarias = data.allPizzarias.nodes;
    const pizzarias = data.pizzarias.nodes;

    allPizzarias
        .sort((a, b) => (a.yearEstablished > b.yearEstablished) ? 1 : -1)

    const [initialPizzas, setInitialPizzas] = useState(allPizzarias)

    const [pizzasToShow, setPizzasToShow] = useState(allPizzarias)

    const [initialYearEstablishedOld, setInitialYearEstablishedOld] = useState(true)
    const [initialYearEstablishedNew, setInitialYearEstablishedNew] = useState(false)

    // all active styles...
    const allActiveStyles = allPizzarias.map(style => style.styles);

    // merge all active styles into one array
    const activeStylesFlattened = [].concat.apply([], allActiveStyles);

    // remove duplicates from array...
    const activeStyles = [...new Set(activeStylesFlattened)]
    
    const [activePizzaria, setActivePizzaria] = useState(pizzarias.length === 1 ? pizzarias[0] : null)

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

        const filterByStyleTavern = (pizza) => 
            values['Tavern'] === true ? pizza.styles.includes('Tavern') === values['Tavern'] : false || true;

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
                .filter(filterByStyleTavern)
                .filter(filterByGoodCold)
        )
    }

    return(
        <div className="wrapper">
            <section className={styles.pizzaListingPage}>
                <div className={styles.filtersWrapper}>
                    <div className={styles.filters}>
                        <form onSubmit={handleSubmit(applyFilters)}>
                            <ul>
                                <li>
                                    <Link to={`/pizzas`} className={styles.pizzaria}>
                                        All Pizzarias
                                    </Link>
                                    <ul>
                                        {allPizzarias.map(pizzaria => (
                                            <li key={pizzaria.id}>
                                                <Link to={pizzaria.slug} className={styles.pizzaria}>
                                                    {pizzaria.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                {!activePizzaria && (
                                    <>
                                        <li>
                                            Styles
                                            <ul>
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
                                            Sort by Est.
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

                                        <li>
                                            <input 
                                                {...register("hasRcCola", {
                                                    onChange: (e) => applyFilters(e)
                                                })}
                                                id="hasRcCola"
                                                type="checkbox"
                                            />
                                            <label for="hasRcCola">Includes RC</label>
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
                                <p>Est. {activePizzaria.yearEstablished}</p>
                                <p>
                                    <a href={activePizzaria.url} target='_blank'>
                                        Website
                                    </a>
                                </p>
                                {activePizzaria.hasRcCola && (
                                    <p>Includes RC Cola</p>
                                )}
                                {activePizzaria.cashOnly && (
                                    <p>Cash Only!</p>
                                )}
                                <p>{activePizzaria.area}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.mainContent}>
                    {activePizzaria && (
                        <div>
                            <h1>{activePizzaria.title}</h1>
                            {activePizzaria.description && (
                                <RichText body={activePizzaria.description} />
                            )}
                            <GatsbyImage className={styles.pizzaDetailHeroImage} alt={activePizzaria.description || activePizzaria.title} image={activePizzaria.coverPhoto.gatsbyImageData} />

                            <div className={styles.imagesGrid}>
                                {activePizzaria.pizzas.map(pizza => (
                                    pizza.images.map(image => (
                                        <GatsbyImage image={image.gatsbyImageData} />
                                    ))
                                ))}
                            </div>
                        </div>
                    )}
                    {!activePizzaria && (
                        <div className={styles.pizzaGrid}>
                            {pizzasToShow.map(pizzaria => (
                                <div key={pizzaria.id}>
                                    <Link to={pizzaria.slug} className={styles.link}>
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