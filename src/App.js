import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavBar from './components/navbar/navbar.js'
import Home from './components/home/home.js'
import About from './components/about/about.js'
import Experience from './components/experience/experience.js';
import Projects from './components/projects/projects.js';
import Articles from './components/articles/articles.js'
import Blog from './components/blog/blog.js'

function App() {
  
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects />
    </>
  );
}

export default App;
