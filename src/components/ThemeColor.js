import React from 'react'
import { useTheme } from '../hooks/useTheme'
import './ThemeColor.css'
import lightIcon from '../assets/light.svg'
import darkIcon from '../assets/dark.svg'

const colors = ['rgb(31, 122, 110)', 'rgb(122, 57, 31)', 'rgb(72, 34, 133)']

const ThemeColor = () => {
  const { changeColor, mode, changeMode } = useTheme()

  return (
    <div className='theme-div'>
      <div className='mode'>
        {mode  === 'light' ? 
          <img 
            src={darkIcon} 
            onClick={() => changeMode(mode  === 'light' ? 'dark' : 'light')}
            alt="dark mode icon"
          /> :
          <img 
            src={lightIcon} 
            onClick={() => changeMode(mode  === 'light' ? 'dark' : 'light')}
            alt="light mode icon"
          />
        }
      </div>

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
