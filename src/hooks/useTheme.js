import React from "react"
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage.utils"

export default function useTheme() {
  const preferDarkColorScheme = "(prefers-color-scheme: dark)"

  // Lazy state initialiser -> runs fn only once -> when app is initially mounted
  const [theme, setTheme] = React.useState(
    () =>
      getFromLocalStorage("_TejaPortfolioTheme") ||
      (window.matchMedia(preferDarkColorScheme).matches ? "dark" : "light")
  )

  // toggle theme based on prefers-color-scheme setting
  React.useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkColorScheme)
    const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light")

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // set theme & save to localStorage
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)

    saveToLocalStorage("_TejaPortfolioTheme", theme)
  }, [theme])

  return [theme, setTheme]
}
