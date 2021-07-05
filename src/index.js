import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import $ from 'jquery';

$(document).ready(function(){
  $('#preview').height($('#editor').height());
    $('img').on('mouseenter', function(e) {
$(this).parent().children('.label').css('border-style','double') ;
console.log('ceva');
});
$('img').on('mouseleave', function(e) {
$(this).parent().children('.label').css('border-style','none') ;
console.log('ceva');
})
});
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



//datele
const quotes=["The journey of a thousand miles begins with one step.","That which does not kill us makes us stronger.","Life is what happens when you’re busy making other plans.","When the going gets tough, the tough get going.","You must be the change you wish to see in the world.","You only live once, but if you do it right, once is enough."];
const authors=["Lao Tzu","Friedrich Nietzsche","John Lennon","Joe Kennedy","Mahatma Gandhi","Mae West"];

//Redux
const NEW_QUOTE='NEW_QUOTE';
const CHANGE_VOLUME='CHANGE_VOLUME';
const ADD_SONG='ADD_SONG';
const DELETE_SONG='DELETE_SONG';
//const TOGGLE_VOLUME='TOGGLE_VOLUME';
const newAction = () => {
  return {
    type: NEW_QUOTE
  }
};
const changeVolume = (inc) => {
  return {
    type: CHANGE_VOLUME,
    increment: inc
  }
}
/*const toggleVolume = () => {
  return{
    type: TOGGLE_VOLUME
  }
}*/
const addSong = (song) => {
  return {
    type: ADD_SONG,
    song: song
  }
}
const deleteSong = (song) => {
  return {
    type: DELETE_SONG,
    song: song
  }
}
const rand = getRandomInt(authors.length);
const initialStateQuote={
  author: authors[rand],
  quote: quotes[rand]
};
const quoteReducer=(state=initialStateQuote,action)=>{
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
const volumeReducer = (state={volume: 50, volumeIcon: 'up'},action)=>{
  switch(action.type)
  {
    case CHANGE_VOLUME:
      {
        const newVolume = state.volume+action.increment;
        if(newVolume!==-5 && newVolume!==105)
        return {
            volume: newVolume,
            volumeIcon: newVolume===0 ? 'mute' : 'up'
          }
        else
        return state
       
      }
    default:
      return state;
  }
}
const songsReducer = (state=[], action)=>{
  switch(action.type){
    case ADD_SONG:
      return [...state,action.song];
    case DELETE_SONG:
      return [...state.slice(0,action.song),...state.slice(action.song+1,state.length)];
    default:
      return state;
  }
}
const reducer = combineReducers({
  quote: quoteReducer,
  volume: volumeReducer,
  songs: songsReducer
});
const store = createStore(reducer);
console.log('store'+store.getState());
const mapStateToProps = (state) => {
  console.log('store'+store.getState().volume.volume);
  return {author: state.quote.author,
         quote: state.quote.quote,
         volume: state.volume.volume,
        volumeIcon: state.volume.volumeIcon,
        songs: state.songs}
};
 
const mapDispatchToProps = (dispatch) => {
  return {
    randQuote: () => {
      
      dispatch(newAction());
    },
    changeVolume: (inc) =>{
      dispatch(changeVolume(inc));
    },
    deleteSong: (index) =>{
      dispatch(deleteSong(index))
    },
    addSong: (song) =>{
      dispatch(addSong(song))
    }
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(App);
 
ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
