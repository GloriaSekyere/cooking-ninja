import { useFetch } from '../../hooks/useFetch'
import './Home.css'

function Home() {
  const { data:recipes, error, isPending } = useFetch("http://localhost:3000/recipes")

  return (
    <div>
      {error && <p className='error'>Error loading recipes...</p>}
      {isPending && <p className='loading'>Loading recipes...</p>}
      {recipes && recipes.map(recipe => (
        <div key={recipe.id} className='recipe-card'>
          <h2>{recipe.title}</h2>
          <p>Cooking time: {recipe.cookingTime}</p>
          <p>{recipe.method.substring(0,99)}...</p>
        </div>
      ))}
    </div>
  )
}

export default Home