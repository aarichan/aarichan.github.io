import './App.css'

import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import NavBar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Blog from './components/blog/blog'
import Page404 from './components/404/404'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home'/>
          </Route>
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/blog' component={Blog} />
          <Route component={Page404} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;