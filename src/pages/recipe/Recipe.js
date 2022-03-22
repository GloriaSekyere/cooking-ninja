import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Recipe.css'

function Recipe() {

  const { id } = useParams()
  const url = "http://localhost:3000/recipes" + id
  const { data:recipe, error, isPending } = useFetch(url)

  return (
    <div>
      {error && <p className='error'>Error loading recipe...</p>}
      {isPending && <p className="loading">Loading recipe...</p>}
    </div>
  )
}

export default Recipe