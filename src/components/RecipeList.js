import './RecipeList.css'
import { Link } from 'react-router-dom'

const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes.map(recipe => (
        <div key={recipe.id} className='recipe-card'>
          <h2>{recipe.title}</h2>
          <p>Cooking time: {recipe.cookingTime}</p>
          <p>{recipe.method.substring(0,99)}...</p>
          <Link to={`/recipe/${recipe.id}`}>
            Cook this
          </Link>
        </div>
      ))}
    </>
  )
}

export default RecipeList