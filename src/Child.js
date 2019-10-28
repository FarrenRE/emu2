import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Child() {
  const theme = useContext(ThemeContext)
  console.log('child theme')
  console.log(theme);
  return null
}

export default Child