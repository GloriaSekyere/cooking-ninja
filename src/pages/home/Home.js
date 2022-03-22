import { useFetch } from '../../hooks/useFetch'
import './Home.css'
import RecipeList from '../../components/RecipeList'

function Home() {
  const { data:recipes, error, isPending } = useFetch("http://localhost:3000/recipes")

  return (
    <div className='home'>
      {error && <p className='error'>Error loading recipes...</p>}
      {isPending && <p className='loading'>Loading recipes...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}

export default Home