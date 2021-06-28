function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//datele
const quotes=["The journey of a thousand miles begins with one step.","That which does not kill us makes us stronger.","Life is what happens when you’re busy making other plans.","When the going gets tough, the tough get going.","You must be the change you wish to see in the world.","You only live once, but if you do it right, once is enough."];
const authors=["Lao Tzu","Friedrich Nietzsche","John Lennon","Joe Kennedy","Mahatma Gandhi","Mae West"];

//Redux

const { applyMiddleware, createStore, combineReducers, bindActionCreators } = Redux;
const NEW_QUOTE='NEW_QUOTE';
const newAction = () => {
  return {
    type: NEW_QUOTE
  }
};

const rand = getRandomInt(authors.length);
const initialState={
  author: authors[rand],
  quote: quotes[rand]
};
const reducer=(state=initialState,action)=>{
  switch(action.type)
    {
      case NEW_QUOTE:
        {
          
          const r=getRandomInt(authors.length);
          console.log(r);
          console.log(authors[r]);
          return {
           author: authors[r],
           quote: quotes[r]
        };
        }
      default:
        return state;
    }
};
const store = createStore(reducer);
//React
class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.newQuote = this.newQuote.bind(this);
  }
  
  newQuote() {
    console.log("ceva");
    this.props.randQuote();
    $(document).ready(function(){
    $("#quote-box").hide();
    function show(){
      
    $("#quote-box").show();
    };
    window.setTimeout(show,700);
    
    
});
  }
  render() {
    return (
      <div class='content'>
        <div id='pergament'>
         <div class='perg'></div>
     <div id="quote-box" >
  <div id='text' class='text-center text-danger'>
    <h2>{this.props.quote}</h2> 
  </div>
    <div id='author' class='pull-right'>
    {this.props.author}
     </div>
         
       </div>
         <div class='perg'></div>
       </div>
        <div id='buttons' class='center-block'>
  <button id="new-quote" onClick={this.newQuote} class='btn btn-warning'><strong>Generate new random quote <i class="fas fa-dice"></i></strong></button>
  <a href="twitter.com/intent/tweet" id="tweet-quote"> <button class='btn btn-danger text-danger'><strong>Tweet <i class="fab fa-twitter"></i></strong></button></a>
</div></div>
    );
  }
};
// Change code above this line
 
const mapStateToProps = (state) => {
  return {author: state.author,
         quote: state.quote}
};
 
const mapDispatchToProps = (dispatch) => {
  return {
    randQuote: () => {
      
      dispatch(newAction());
    }
  }
};
const { Provider, connect } = ReactRedux;
const Container = connect(mapStateToProps, mapDispatchToProps)(Quote);
 
ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('root')
);


