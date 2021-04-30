import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavBar from './components/navbar/navbar.js'
import Home from './components/home/home.js'
import About from './components/about/about.js'
import Experience from './components/experience/experience.js';
import Projects from './components/projects/projects.js';
import Resume from './components/resume/resume.js';
import Articles from './components/articles/articles.js'
import Blog from './components/blog/blog.js'

function App() {
  
  return (
    <Router>  
      <NavBar />     
      <Switch>                 
        <Route exact path='/' component={Home}/>     
        <Route path='/about' component={About}/>  
        <Route path='/experience' component={Experience}/>
        <Route path='/projects' component={Projects}/>   
        <Route path='/resume' component={Resume}/>     
        <Route path='/articles' component={Articles}/>
        <Route path='/blog' component={Blog}/>
      </Switch>
  </Router>
  );
}

export default App;
