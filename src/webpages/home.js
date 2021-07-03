import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = (props) => {
  console.log(props);
    return (
        <div>
            <Helmet>
        <link rel="stylesheet" href='./styles/home.css'/>
        
        <style>
          {`
            body {
              color: white;
              background: radial-gradient(circle at center, #99ccff 60%, #33ccff);
              font-size:40px; }
          `}
        </style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
   
      </Helmet>

            <header className='container-fluid text-primary text-center'>
              <div className='row'>
        <div className='col-sm-5'></div>      
        <img alt='' src='./img/jqueyLogo.png' className='col-sm-2'/>       
      </div>
              <div className='row'>
        <div className='col-sm-3'></div> 
        <img alt='' className='col-sm-2' src='./img/reactLogo.png'/>
        <div className='col-sm-2 text-center'>
          <h1 id='homeHeader' class='h1'><strong>My training website</strong> </h1>
        </div>
        <img alt='' className='col-sm-2'  src='./img/reduxLogo.png'/>
      </div>
              <div className='row'>
        <div className='col-sm-1'></div>
        <img alt='' className='col-sm-2'  src='./img/sassLogo.png'/>
        <div className='col-sm-6'>
        
        <p>I created this web app as an exercise to practice my front-end skills.<br/>
          This site was built using React, Redux, Bootstrap, jQuery and Sass.
        </p>
        </div>
        <img alt='' className='col-sm-2' src='./img/bootstrapLogo.png'/>
      </div>
            </header>
    
           <main className='text-primary'>
     <div className="row text-center">
      <div className="col-md-4">
        <Link to='/Markdown_Previewer'>
          <img alt='' src='./img/MarkLabel.png' className='img-circle center-block'/><br/>
          <h2 className="label text-primary">Markdown Previewer</h2>
        </Link>
      </div>
      <div className="col-md-4">
        
          <Link to="/Quote_Machine">
            <img alt='' src='./img/quote_label.jpg' className='img-circle center-block'/><br/>
            <h2 className="label text-primary">Random Quote Machine</h2>
          </Link>
      </div>
      <div className="col-md-4">
        <Link to='/Drum_Machine'>
          <img alt='' src='./img/drum_label.jpg' className='img-circle center-block'/><br/>
          <h2 className="label text-primary">Drum Machine</h2>
        </Link>
      </div>
    </div>
    </main>
        </div>
    );
};
export default Home;