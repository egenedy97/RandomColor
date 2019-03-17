import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 30;
const BOX = ({color}) =>{
  const style = {
    width: '180px',
    height : '180px' ,
    display :'inline-block',
    backgroundColor : color
  }
  return <div style={style} /> ;
}
class App extends Component {

  constructor(props)
  {
    super(props);
    const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor , this) ;
    this.state = {boxes} ;

    setInterval(() =>{
      const boxes = this.state.boxes.slice ();
      const randIndex = Math.floor(Math.random() * boxes.length) ;
      boxes[randIndex] = this.getRandomColor() ;
      this.setState({boxes}); 
    },300)
  }

  getRandomColor(){
    let colorIndex = Math.floor(Math.random()*this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
    const boxes = this.state.boxes.map((color , index )=>(
      <BOX key={index} color={color} />
    ));
    return (
      <div className="App">
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors:['red' , 'black', 'white', 'green', 'purple', 'yellow', 'orange', 'blue', 'brown', 'pink']
}
export default App;
