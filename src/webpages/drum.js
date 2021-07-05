import React from 'react';
import $ from 'jquery';
import { Helmet } from "react-helmet";


class Volume extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    
    
  this.toggleVolume=this.toggleVolume.bind(this);
   
  }
  
  
  toggleVolume(){
    if(this.state.volumeIcon==='up' && this.state.volume === 0)
      {
        this.setState({
          volumeIcon: 'mute'
        })
      }
    if(this.state.volumeIcon==='mute' && this.state.volume > 0){
      this.setState({
          volumeIcon: 'up'
        })
    }
  }
  
  

  render(){
     
    return (
      <div>
        <div className='auxiliary-container'>
        
          <div ><i className={'fas fa-volume-'+this.props.volumeIcon+' center-block'} style={{color:'#e6b800', fontSize:'500%', margin:'auto'}}></i></div>
        <div id='bar'>
  <div id='volume' style={{height:this.props.volume+'%'}}></div>
</div></div></div>)
  }
};

class Drum extends React.Component {
  isRecording = false;
  song = [];
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      buttonText: 'Record song'
    }
    this.playVid=this.playVid.bind(this);
    this.record = this.record.bind(this);
    this.playSong = this.playSong.bind(this);
  }
  record(event){
    this.setState({
      buttonText: this.isRecording ? 'Record song' : 'Stop recording'
    })
    this.isRecording = !this.isRecording;
    if(this.isRecording === false)
    {
      console.log(this.song);
      
    }
  }
  playVid(event) {
    console.log(event.target)
    let id=$(event.target).parent().attr('id')[1];
    const parent =$(event.target).parent().attr('id');
    $('.drum-pad h4').css('color','black');
    $('img').css('border-color','black');
    $('#'+parent+' h4').css('color','#e6b800');
    $('#'+parent+' img').css('border-color','#e6b800');
    console.log(id);
    $('#'+id)[0].play();
    if(this.isRecording)
    this.song.push(id); 
  
    
}

playSong(song){
  let audioPointer =0;
  playNext(); 
  function evidentiate(id){
    $('.drum-pad h4').css('color','black');
    $('img').css('border-color','black');
    $('#B'+id+' h4').css('color','#e6b800');
    $('#B'+id+' img').css('border-color','#e6b800');
  }
  function playNext() { 
    if (audioPointer <song.length) { 
      console.log($('#'+song[audioPointer]).attr('src'));
      let audio = new Audio($('#'+song[audioPointer]).attr('src')); 
      audio.addEventListener("ended", playNext); 
      evidentiate(song[audioPointer]);
      audio.play(); 
      console.log(`playing ${song[audioPointer]}`); 
      audioPointer += 1; 
    } else { 
      console.log("finished"); 
    } 
  } 
  
  
 
}
componentDidMount(){
  let keys=['Q','W','E','A','S','D','Z','X','C'];
  const el = this;
  document.addEventListener('keydown', function(event){
  console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
 
    if(event.keyCode===38)
      el.props.changeVolume(5);
    else if(event.keyCode===40)
      el.props.changeVolume(-5);
    else if(keys.indexOf(event.key.toUpperCase())>=0)
      {
        console.log('yes');
        $('#B'+event.key.toUpperCase()+ ' img').click();
        
        }
    
  });
  
}
  render() {
    $('.clip').prop('volume',this.props.volume/100);
    let listOfSongs = this.props.songs.map((song,index)=>
        <div class='song' key = {index} >
          Nr.{index+1}
          <div><i className='fas fa-play' onClick={()=>this.playSong(song)}></i>
          <i className='fa fa-trash' onClick={()=>this.props.deleteSong(index)}></i></div>
        </div>
      );
    return (
      
      <div className='container-fluid'>
        <Helmet>
        <link rel="stylesheet" href="./styles/drum.css"/>
        </Helmet> 
       <div id="songDialog" className="modal fade" role="dialog">
  <div className="modal-dialog">

    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Do you want to save this song?</h4>
      </div>
      <div className="modal-body">
        
      <button className="btn btn-default" data-dismiss="modal" onClick={()=>{this.song=[]}}>No</button>
      <button className="btn btn-default" data-dismiss="modal" onClick={this.record}>Keep Recording</button>
      <button className="btn btn-default" data-dismiss="modal" onClick={() => {this.props.addSong(this.song);this.song=[]}}>Yes</button>
      </div>
    </div>

  </div>
</div>
         <div className='auxiliary-content'>
         <div className='center-block text-center'><i className={'fas fa-music center-block'} type='button'  style={{color:'#e6b800', fontSize:'500%', margin:'auto'}}></i> </div>
         <button className='center-block' onClick={this.record}  data-toggle="modal" data-target={(this.isRecording===false && this.song.length >0)?"#songDialog":''}>{this.state.buttonText}</button>
         {listOfSongs}
         </div>          
        <div id='drum-machine'>
        <div id='display'></div>
        <div className='row'>
          <div className='col-sm-3'></div>
          <div className='drum-pad col-sm-2' id='BQ' onClick={this.playVid}>
            <audio id='Q' class='clip' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"/>
            <img alt='' className='center-block' src='./img/drums_4.jpeg'/>
            <h4 className='center-block text-center'>Key Q</h4>
          </div>
          <div className='col-sm-2'/>
          <div className='drum-pad col-sm-2' id='BW' onClick={this.playVid}>
           <audio id='W' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className='clip' />
           <img alt='' className='center-block' src='./img/drums_7.jpeg'/>
            <h4 className='center-block text-center'>Key W</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-2'>
            <div className='drum-pad' id='BE' onClick={this.playVid}>
              <audio id='E' src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className='clip' />
              <img alt='' className='center-block' src='./img/drums_3.jpeg'/>
              <h4 className='center-block text-center'>Key E</h4>
            </div>
          </div>
          <div className='col-sm-7'>
          <h1><p className='text-center'>Drum Machine</p> </h1>   
          <p>   Click on images or press the corresponding keys for simulating playing the drums. Use the arows keys for changing the volume </p>
          </div>
          <div className='col-sm-2'>
            <div className='drum-pad' id='BA' onClick={this.playVid}>
            <audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            <img alt='' className='center-block' src='./img/drums_9.jpg'/>
            <h4 className='center-block text-center'>Key A</h4>
            </div>
          </div>
          <div className='col-sm-1'></div>
        </div>
        <div className='row'>
          <div className='col-sm-3'></div>
          <div className='col-sm-6' style={{display: 'flex',justifyContent: 'center'}}>
            
                <div className='drum-pad col-sm-4' id='BS'  onClick={this.playVid}>
                 <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                 <img alt='' className='center-block' src='./img/drums_5.jpeg'/>
                 <h4 className='center-block text-center'>Key S</h4>  
              </div>
              <div className='drum-pad col-sm-4' id='BD' onClick={this.playVid}>
                <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                <img alt='' className='center-block' src='./img/drums_6.jpeg'/>
                <h4 className='center-block text-center'>Key D</h4>       
              </div>
            </div>
          
          <div className='col-sm-2'>
             <div className='drum-pad' id='BZ' onClick={this.playVid}>
               <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
               <img alt='' className='center-block' src='./img/drums_8.jpeg'/>
               <h4 className='center-block text-center'>Key Z</h4>
             </div> 
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-1'></div>
          <div className='col-sm-4' style={{display:'flex', justifyContent:'center'}}>
            <div className='drum-pad col-sm-6' id='BX' onClick={this.playVid}>
              <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
              <img alt='' className='center-block' src='./img/drums_2.jpeg'/>
                <h4 className='center-block text-center'>Key X</h4>
              </div> 
 
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-5'></div>
          <div className='col-sm-4' style={{display:'flex', justifyContent:'center'}}>
          <div className='drum-pad' id='BC' onClick={this.playVid}>
        <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_h4.mp3"></audio>
        <img alt='' className='center-block' src='./img/drums_1.jpeg'/>
        <h4 className='center-block text-center'>Key C</h4></div>
  </div></div>
</div> 
        <Volume {...this.props}/>
      </div>
    );
  }
};

export default Drum;
