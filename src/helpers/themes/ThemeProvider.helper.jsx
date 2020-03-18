import React from 'react'
import {MuiThemeProvider} from '@material-ui/core'
import {CssBaseline} from '@material-ui/core'
import {theme} from './themes'

const ThemeProvider = ({children}) =>(
    <MuiThemeProvider theme = {theme}>
    <CssBaseline />
    {children}
    </MuiThemeProvider>
);
export default ThemeProvider;