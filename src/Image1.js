import {Component} from "react";

class Image extends Component
{
    constructor(props){
        super(props);
        this.state = {value: 'food'}
    }
    
  render()
  {
    return(
        
        <div>
            
      <img src={this.props.value[0]} alt="food" height="185px" width="400px" onClick = {
          () =>{
              this.setState({value: 'clicked'})
          }
    }
      />
    
    <p>{this.state.value}</p>
      
        </div>
    );
  }
}

class Card extends Component{
  renderButton(value)
  {
    return <Image value={value} />;
  }
  render()
    {
        return(
            <div align ="center">
                
                {this.renderButton(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoB3a_65P1uEA5W3EgOyAsCbsmkTmtmVF8Q&usqp=CAU',"IMAGE 1"])}
                {this.renderButton(['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-HNo4IIeBujRcKBOXorWU1JKDx0lT7hWBQ&usqp=CAU',"IMAGE 2"])}
                {this.renderButton(['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F03%2F19%2Ffideos-secos-tacos-FT-RECIPE0420-1.jpg',"IMAGE 3"])}

            </div>
        );
    }
}
export default Card;