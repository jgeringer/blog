import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';

function countRecipesInTypes(recipes) {
    // Return the recipe types with counts
    const counts = recipes
      .map((recipe) => recipe.type)
      .flat()
      .reduce((acc, type) => {
        // check of this is an existing topping
        const existingType = acc[type];
        console.log(type)
        if (existingType) {
          // if it is, increment it by 1
          existingType.count += 1;
        } else {
          // otherwise create a new entry in our acc and set it to one
          acc[type] = {
            type: type,
            count: 1,
            id: type.id,
          };
        }
        return acc;
      }, {});
    // Sort them based on their count
    const sortedTypes = Object.values(counts).sort(
      (a, b) => b.count - a.count
    );
    return sortedTypes;
  }

export default function KitchenFilter() {
// Get a list of all of the toppings
const { mealTypes, recipes } = useStaticQuery(graphql`
query {
    mealTypes: allContentfulTypeOfMeal {
        nodes {
            type
            id
        }
    }
    recipes: allContentfulRecipe {
        totalCount
        nodes {
            type
            id
        }
    }
}
`);
console.clear();
console.log({ mealTypes, recipes });
const typeWithCounts = countRecipesInTypes(recipes.nodes);
console.log(typeWithCounts);

  return (
    <>
      <Link to="/kitchen">
        <span className="name">All</span>
        <span className="count">: {recipes.totalCount}</span>
      </Link>

      {typeWithCounts.map((type) => (
        <div>
            <Link to={`/kitchen/${type.type}`} key={type.count}>
                <span className="name">{type.type} ({type.count})</span>
            </Link>
        </div>
      ))}

    </>
  );
}
