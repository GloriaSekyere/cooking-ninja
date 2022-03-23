import React from 'react'
import { useTheme } from '../hooks/useTheme'
import './ThemeColor.css'

const colors = ['rgb(31, 122, 110)', 'rgb(122, 57, 31)', 'rgb(72, 34, 133)']

const ThemeColor = () => {
  const { changeColor } = useTheme()

  return (
    <div className='theme-div'>
      <div className='theme-btns'>
        {colors.map(color => 
          <div 
            key={color} 
            className="theme-btn" 
            style={{ background: color }}
            onClick={() => changeColor(color)}
          />
        )}
      </div>
    </div>
  )
}

export default ThemeColor
