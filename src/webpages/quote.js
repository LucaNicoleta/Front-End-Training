import React from 'react';
import $ from 'jquery';
import { Helmet } from "react-helmet";
class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.newQuote = this.newQuote.bind(this);
  }
  
  newQuote() {
    
    this.props.randQuote();
    $(document).ready(function(){
    $("#quote-box").hide();
    function show(){
      
    $("#quote-box").show();
    };
    window.setTimeout(show,500);
    
    
});
  }
  render() {
    return (
      <div>
        <Helmet>
        <link rel="stylesheet" href="./styles/quote.css" />
        <link href="https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&display=swap" rel="stylesheet"/>
         <style>
         {`body {
  width: 100%;
  height: 100%;
  background-image: url(https://cdn.wallpapersafari.com/24/53/qoSOWN.jpg);
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; }`}
        </style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
   
        </Helmet>
       
        <h1 id='quoteHeader' className='text-center center-block'>Random Quote Machine</h1>
        <div className='content'>               
        <div id='pergament'>
         <div className='perg'></div>
         <div id="quote-box" >
           <div id='text' className='text-center text-danger'>
             <h2>{this.props.quote}</h2> 
           </div>
           <div id='author' className='pull-right'>{this.props.author}</div>    
         </div>
         <div className='perg'></div>
        </div>
        <div id='buttons' className='center-block'>
  <button id="new-quote" onClick={this.newQuote} className='btn btn-warning'><strong>Generate new random quote <i className="fas fa-dice"></i></strong></button>
  <a href="twitter.com/intent/tweet" id="tweet-quote"> <button className='btn btn-danger text-danger'><strong>Tweet <i className="fab fa-twitter"></i></strong></button></a>
</div></div>
   
      </div>
    );
  }
};

export default Quote;
