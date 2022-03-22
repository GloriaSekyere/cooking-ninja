import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Recipe.css'

function Recipe() {

  const { id } = useParams()
  const url = "http://localhost:3000/recipes/" + id
  const { data:recipe, error, isPending } = useFetch(url)

  return (
    <div>
      {error && <p className='error'>Error loading recipe...</p>}
      {isPending && <p className="loading">Loading recipe...</p>}
      {recipe && (<div className='detail-recipe'>
        <h2>{recipe.title}</h2>
        <p>Cooking Time: {recipe.cookingTime}</p>
        <ul>
          {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>
        <p>{recipe.method}</p>
      </div>)}
    </div>
  )
}

export default Recipe