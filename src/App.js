import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard/dashboard'
import Menu from './components/Menu/menu'
import Banner from './components/Banner/banner'

import Services from './components/Services/carousel'
import About from './components/About/about'
import Course from './components/Course/course'
import Contact from './components/Contact/contact'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import Theme from './Theme'

function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(Theme)}>
      <div className="App">
        <Dashboard />
        <Menu />
        <Banner />
        
        <Services />
        <About />
        <Course />
        <Contact />
      </div> 
    </MuiThemeProvider>
  );
}

export default App;
