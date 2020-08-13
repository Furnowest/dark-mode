import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("ya",true);
    return[darkMode, setDarkMode]
}

