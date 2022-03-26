import { useState, useEffect } from 'react'
import { database } from '../../firebase/config'

//components
import RecipeList from '../../components/RecipeList'

//styles
import './Home.css'


function Home() {
  const [recipes, setRecipes] = useState(null)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(null)

  useEffect(() => {
    setIsPending(true)

    const unsubscribe = database.collection('recipes').onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("No recipes to load")
          setIsPending(false)
        } 
        else {
          let results = []
          snapshot.docs.forEach(recipe => {
            console.log(recipe)
            results.push({ id: recipe.id, ...recipe.data() })
          })
          setRecipes(results)
          setIsPending(false)
        }
      }, (err) => {
        setError(err.message)
        setIsPending(false)
      })

    return () => unsubscribe()
      
  }, [])

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading recipes...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}

export default Home