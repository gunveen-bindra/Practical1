import { render } from "@testing-library/react";
import { Component } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

class Square extends Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }

  class Board extends Component 
  {
      renderSquareButton(value)
      {
          return <Square value={value} />;
        }
  
  render(){
      return(
          <div>
          {this.renderSquareButton(2)}
          {this.renderSquareButton(3)}
          </div>
      );
  }
  }
/*
class Passprops extends Component {

}
*/
export default Board;