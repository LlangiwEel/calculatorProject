import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      evalString: ''
    }
this.inputNum = this.inputNum.bind(this);
this.inputEquals = this.inputEquals.bind(this);
this.inputClear = this.inputClear.bind(this);
  }

//Button click adds number or operator to evalString
  inputNum(event) {
    if (this.state.evalString === "Invalid equation") {
      this.setState({
        evalString: event.target.value
      })
    } else {
      this.setState({
          evalString: this.state.evalString + event.target.value
        })
      }

  }

//Checks for invalid equation and evals evalString
  inputEquals() {
    let str = this.state.evalString;
    switch(str[0]){
      case '+':
      case '-':
      case '/':
      case 'x':
      case 'I':
        this.setState({
          evalString: 'Invalid equation'
        })
        break;

      default:
        switch((str[str.length-1])){
          case '+':
          case '-':
          case '/':
          case 'x':
          case 'n':
          this.setState({
            evalString: 'Invalid equation'
          })
          break;

          default:
          console.log(str[str.length-1]);
          this.setState({
            evalString: eval(str.replace('x','*'))
          })
        }
      }
    }

//Clears evalString
  inputClear() {
    this.setState({
      evalString: ''
    })
  }

  render() {
    return (
      <div className="calculatorContainer">
      <div id='output-window'><span>{this.state.evalString}</span></div>
      <span className='left-panel'>
        <button className="calculatorButton" value='1' onClick={this.inputNum}>1</button>
        <button className="calculatorButton" value='2' onClick={this.inputNum}>2</button>
        <button className="calculatorButton" value='3' onClick={this.inputNum}>3</button>
        <button className="calculatorButton" value='4' onClick={this.inputNum}>4</button>
        <button className="calculatorButton" value='5' onClick={this.inputNum}>5</button>
        <button className="calculatorButton" value='6' onClick={this.inputNum}>6</button>
        <button className="calculatorButton" value='7' onClick={this.inputNum}>7</button>
        <button className="calculatorButton" value='8' onClick={this.inputNum}>8</button>
        <button className="calculatorButton" value='9' onClick={this.inputNum}>9</button>
        <button className="calculatorButton" value='0' onClick={this.inputNum}>0</button>
        <button className="calculatorButton" id='clearButton' onClick={this.inputClear}>C</button>
      </span>
      <span className='right-panel'>
        <button className="calculatorButton" value='+' onClick={this.inputNum}>+</button>
        <button className="calculatorButton" value='-' onClick={this.inputNum}>-</button>
        <button className="calculatorButton" value='/' onClick={this.inputNum}>/</button>
        <button className="calculatorButton" value='x' onClick={this.inputNum}>x</button>
        <button className="calculatorButton" onClick={this.inputEquals}>=</button>

      </span>


    </div>
  );
  }
}

export default App;
