import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { database } from '../../firebase/config'

// styles
import './Recipe.css'


function Recipe() {

  const { id } = useParams()
  const history = useHistory()

  const [recipe, setRecipe] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(null)

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/")
      }, 2000)
    }
  }, [error, history])

  useEffect(() => {
    setIsPending(true)

    database.collection('recipes').doc(id).get()
      .then(doc => {
        if (doc.exists) {
          setIsPending(false)
          setRecipe(doc.data())
        } 
        else {
          setIsPending(false)
          setError(true)
        }
      })
      .catch(err => {
        setIsPending(false)
        setError(err.message)
      })
  }, [id])

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