
import './App.css';
import React from 'react';
import PropTypes from 'prop-types'

const ChildComponent = (props) =>{
  const styleinline = {
    background:"green",
    color:"yellow"
  } // -> inline css 
  return <h1 style={styleinline}>{props.title}</h1>
};

ChildComponent.propTypes = {
  title: PropTypes.string.isRequired
} ;// ->  this makes sure that the title is a string 


ChildComponent.defaultProps = {
  title: 'Default Title'
}; // -> this will provide a default title 




/* class ChildComponent extends React.Component{
  render (){
    return <h1>{this.props.title }</h1>
  }
} */
function App() {
  return (
    <ChildComponent title='lewis' />

  );
}

export default App;
