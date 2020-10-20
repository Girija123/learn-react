import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from "jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css"


let ProductList = [{ id: 1, name: "firstproduct", price: 10, description: "am the first product" },
{ id: 2, name: "secondproduct", price: 13, description: "am the second product" },
{ id: 3, name: "thirdproduct", price: 9, description: "am the third product" },
{ id: 5, name: "fifthproduct", price: 9, description: "am the fifth product" },
{ id: 4, name: "fourthproduct", price: 85, description: "am the fourth product" }]

const Product = ({ id, name, description, price }) => {
  return [<div>
    <p>{id}</p>
    <p>{name}</p>
    <p>{price}</p>
    <p>{description}</p>
  </div>
  ]
}



class PriceSlider extends React.Component {

  state = { fromPrice: "1", toPrice: "200", price: "price" }



  componentDidMount() { //The function will be called when the component is rendered

    var self = this;


    $('#sliderCtrl3').slider({
      values: [10, 200],
      min: 0,
      max: 200,
      range: true,
      slide: function (evt, elem) {

        $('#sl3Val1').text(elem.values[0]);
        { self.setState({ fromPrice: elem.values[0] }) }
        $('#sl3Val2').text(elem.values[1]);
        { self.setState({ toPrice: elem.values[1] }) }



      }
    });


  }




  render() {

    console.log(this.state.fromPrice)

    console.log(this.state.toPrice)
    return (
      <div>
        <h3>Range Slider - select and upper and lower value</h3>
        <p>Sliders controls can be used to select ranges of values.</p>
        <p>Select a rent range: $<span id="sl3Val1"></span> to $<span id="sl3Val2"></span></p>
        <div id="sliderCtrl3" class="sliderClass" ></div>
        <ProductDisplay passPrice={ProductList} fromPrice={this.state.fromPrice} toPrice={this.state.toPrice} />
      </div>

    )
  }
}

class ProductDisplay extends React.Component {
  render() {
    const { passPrice } = this.props
    const { fromPrice } = this.props
    const { toPrice } = this.props
    console.log(passPrice)
    return (
      <div>
        {passPrice.map(product => {
          if (product.price >= fromPrice && product.price <= toPrice)
          return <div>
              <p>{product.id}</p>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          
        })}
      </div>
    )
  }
}

ReactDOM.render(
  <PriceSlider />, document.getElementById('root')
)