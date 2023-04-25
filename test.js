import { useState, useEffect, createContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme'
import Routes from './Routes'

export const UserContext = createContext({})

function Test() {
  const [loading, setLoading] = useState(true)
  const [PatientSession, setPatientSession] = useState(true)

  useEffect(() => {
    const fetchPatientAuth = async () => {
      try {
        setLoading(true)
        const res = await fetch('/isAuth')
        if (!res.ok) return setLoading(false)

        setPatientSession(await res.json())
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error('There was an error fetch auth', error)
        return
      }
    }
    fetchPatientAuth()
  }, [])

  return (
    <UserContext.Provider value={PatientSession}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? <>loading...</> : <Routes />}
      </ThemeProvider>
    </UserContext.Provider>
  )
}

export default Test