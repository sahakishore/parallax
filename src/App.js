import React, {useState, useEffect} from 'react'
// import './App.css';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// import RenderContent from './Components/RenderContent';
import Home from './Components/Home';
import Layout from './Components/Layout';
import RenderGsap from './Components/RenderGsap';




const App = () => {
  
  return (
		<Router>
            <Layout>
            <div className="mainarea" >
              
                <Switch >
                    <Route exact path='/' component={Home} />
                    {/* <Route exact path='/about-us' component={AboutUs} /> */}
                    <Route exact path='/gsap' component={RenderGsap} />
                    
                    <Route component={Home} >
                      <Redirect to="/" />
                    </Route>
                    
                </Switch>
            </div>
            </Layout>
        </Router>
	);
}

export default App
