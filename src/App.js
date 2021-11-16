import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/pages/Main'
import About from './components/pages/About'
import Reference from './components/pages/Reference'
import Script from './components/pages/Script'
import Youtube from './components/pages/Youtube'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import ReferDetail from './components/pages/ReferDetail'
import CssReferDetail from './components/pages/CssReferDetail'
import JavaReferDetail from './components/pages/JavaReferDetail'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Main}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/reference' component={Reference}></Route>
      <Route path='/refer-detail' component={ReferDetail}></Route>
      <Route path='/css-refer-detail' component={CssReferDetail}></Route>
      <Route path='/java-refer-detail' component={JavaReferDetail}></Route>
      <Route path='/script' component={Script}></Route>
      <Route path='/youtube' component={Youtube}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/portfolio' component={Portfolio}></Route>
    </Router>
  )
}

export default App;
