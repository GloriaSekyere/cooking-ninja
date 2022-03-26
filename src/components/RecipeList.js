import { database } from '../firebase/config'
import { Link } from 'react-router-dom'
import { useTheme } from  '../hooks/useTheme'

// styles
import './RecipeList.css'

// assets
import BinDark from '../assets/bin_dark.svg'
import BinLight from '../assets/bin_light.svg'

const RecipeList = ({ recipes }) => {
  const { color, mode } = useTheme()

  const handleDelete = (id) => {
    database.collection('recipes').doc(id).delete()
  }
  
  return (
    <>
      {recipes.map(recipe => (
        <div key={recipe.id} className='recipe-card'>
          <h2>{recipe.title}</h2>
          <p>Cooking time: {recipe.cookingTime}</p>
          <p>{recipe.method.substring(0,99)}...</p>
          <Link to={`/recipe/${recipe.id}`} style={{ background: color }}>
            Cook this
          </Link>
          {mode === 'light' ? 
            <img 
              className='delete'
              src={BinDark}
              alt="delete icon"
              onClick={() => handleDelete(recipe.id)}
            /> :
            <img 
              className='delete'
              src={BinLight}
              alt="delete icon"
              onClick={() => handleDelete(recipe.id)}
            />
          }
        </div>
      ))}
    </>
  )
}

export default RecipeList