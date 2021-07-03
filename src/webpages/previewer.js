import React from 'react';
import { Helmet } from 'react-helmet';

const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can al
 make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
2. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


const marked = require("marked");

// Change code below this line
class Markdown extends React.Component {
  constructor(props) {
    super(props);
    console.log('Test');
    this.state = {
      input: defaultText
    }
    
    this.handleChange = this.handleChange.bind(this);
    
    
  }
  
  handleChange(event) {
    
    this.setState({
      input: event.target.value
    });
   
  }
  
  render() {
    return (
      <div>
        <h1 id='headerPreviewer' class='text-center'>
  <span class='white-black-text'>Markdown  </span> 
  <span class='black-white-text'>  Previewer</span></h1>
      
     <div class='row justify-content-md-center'>
       <Helmet>
        <style>
        {
          `body{
            background:  linear-gradient(to right, white 0%, black 100%);
          }`
        }
      </style>
      <link rel="stylesheet" href='./styles/previewer.css'/>
      </Helmet>
      
  <div id='editor-tab' class='col-xs-6'>
    <h2 id='editor-header' class='col-xs-12'>Editor</h2>
    <textarea id='editor' class='col-xs-12 col-center bg-danger' rows='50' value={this.state.input} onChange={this.handleChange}></textarea>
  </div>
   <div id='preview-tab' class='col-xs-6'>
     <h2 id='preview-header' class='col-xs-12 col-center'> Preview</h2>
       <div id='preview'  dangerouslySetInnerHTML={{ __html: marked(this.state.input)}} ></div>
  
  </div>
  </div>
</div> 

    
    );
  }
};


 



export default Markdown;