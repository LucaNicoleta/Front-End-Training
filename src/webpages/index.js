import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Quote from './quote';
import Markdown from './previewer';
import Home from './home';
import Drum from './drum';
const Webpages = (props) => {
    return(
        <Router>
            <Route exact path="/"  component = {Home} />
            <Route path='/Markdown_Previewer' component = {Markdown}/>
            <Route path = "/Quote_Machine"   render={()=><Quote {...props}/>}/>
            <Route path="/Drum_Machine" render={()=><Drum {...props}/>}/>
        </Router>
    );
};
export default Webpages;