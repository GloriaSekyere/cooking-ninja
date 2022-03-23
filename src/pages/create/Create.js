import './Create.css'
import { useState, useRef, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'
import { useTheme } from  '../../hooks/useTheme'

function Create() {
  const [title, setTitle] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [method, setMethod] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const { postData, data } = useFetch("http://localhost:3000/recipes", 'POST')
  const history = useHistory()
  const { color } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({
      title: title, 
      ingredients: ingredients, 
      cookingTime: `${cookingTime} minutes`,
      method: method 
    })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    let ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }

    setNewIngredient('')
    ingredientInput.current.focus()
  }

  useEffect(() => {
    if (data) {
      history.push("/")
    }
  }, [data, history])

  return (
    <div className='create'>
      <h1 className='page-title'>Create Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input 
            className='title'
            type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            style={{ borderColor: color }}
          />
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input 
            className='cookingTime'
            type="number"
            onChange={e => setCookingTime(e.target.value)}
            value={cookingTime}
            style={{ borderColor: color }}
          />
        </label>

        <div className='ingredients'>
          <p>Add Ingredients:</p>
          <div>
            <label htmlFor='ing' />
            <input 
              id="ing"
              type="text"
              onChange={e => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
              style={{ borderColor: color }}
            />
            <button 
              onClick={handleAdd}
              style={{ background: color }}
            >Add</button>
          </div>
          {ingredients.map(ing => <em key={ing}>{ing}, </em>)}
        </div>

        <label>
          <span>Method:</span>
          <textarea
            onChange={e => setMethod(e.target.value)}
            value={method}
            style={{ borderColor: color }}
          />
        </label>

        <input 
          type="submit" 
          value="Submit"
          style={{ background: color }}
        />
      </form>
    </div>
  )
}

export default Create