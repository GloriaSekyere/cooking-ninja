import './Search.css'
import RecipeList from '../../components/RecipeList'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get("q")
  const { data, error, isPending }  = useFetch(`http://localhost:3000/recipes?q=${query}`)
  
  if (query.length ===  0) {
    return (<p className='error'>No results found.</p>)
  }

  return (
    <div>
      <h2 className='search-title'>Search Results for "{query}"</h2>
      <div className='search'>
        {error && <p className='error'>Error loading results...</p>}
        {isPending && <p className='loading'>Loading results...</p>}
        {data && <RecipeList recipes={data} />}
      </div>
    </div>
  )
}

export default Search