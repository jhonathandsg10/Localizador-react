import { CssBaseline } from '@mui/material'
import './App.css'
import { BaseLayout } from './BaseLayout'
import { Main } from './Main/Index'
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { getUser } from './service/api'


type User = {
  avatarURL: string,
  html: string,
  name: string
}

function App() {
  const {data,isLoading} = useQuery({
    queryKey: ["user-github"],
    queryFn: () => { getUser }
  })
  return (
    <>
      
      <CssBaseline />
      <BaseLayout title={'LOCALIZADOR DE PERFIS'} />
      <Main title={'LOCALIZAR PERFIL'} />
    </>
  )
}

export default App
