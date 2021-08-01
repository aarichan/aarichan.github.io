import './App.css'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Blog from './components/blog/blog'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/blog' component={Blog} />
      </Router>
    </div>
  );
}

export default App;