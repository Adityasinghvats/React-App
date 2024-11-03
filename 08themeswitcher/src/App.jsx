import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

// the functionality of this proj is same as that of tailwind website
function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // actual change
  useEffect(() => {
    const htmltheme = document.querySelector('html').classList
    htmltheme.remove('light', 'dark')
    htmltheme.add(themeMode)
  },[themeMode])

  return (
      <Themeprovider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
      </Themeprovider>
  )
}

export default App
