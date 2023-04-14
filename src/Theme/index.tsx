import { createTheme, ThemeProvider } from '@mui/material'
import { teal } from '@mui/material/colors'
import './style.css'

const theme = createTheme ({
    palette : {
        primary : {
            main: teal[500],
        },
    },
})

type ThemeProps = {
    children : React.ReactNode;
}
  
  
export function Theme ( children: ThemeProps) {
    return (
        <>
            <ThemeProvider theme={theme}> {children} </ThemeProvider>
        </>
    )
}