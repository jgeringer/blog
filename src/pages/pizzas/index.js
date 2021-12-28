import React from 'react'
import { Link, graphql } from 'gatsby'
import * as styles from './style.module.css'

export default function Pizzas({ data }) {
    console.log(`pizza time`);

    return(
        <div className="wrapper">
            <h2>Pizza time</h2>
            <section className='u-flex'>
                <div className='u-lg-1of4'>
                    Pizza filters:
                    <ul>
                        <li>Trait: Sauce, Cheese, Sausage, Crust, Grease</li>
                        <li>Location: South Side, North Side</li>
                        <li>Nearest</li>
                        <li>Cut: Square Cut, Pie Cut</li>
                        <li>My Rating</li>
                        <li>Style: Tavern, Deep Dish, Cracker, Neopolitan</li>
                        <li>Includes RC</li>
                        <li>Packaging: Paper bag, Box</li>
                        <li>Cash Only</li>
                        <li>Age: 10+, 20+, 30+, 40+</li>
                        <li>Eatability factor: (score decreases after x minutes)</li>
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
                        Pizza List
                    </div>
                </div>
            </section>
        </div>
    )
}
