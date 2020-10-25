import React from 'react';
import ReactDOM from 'react-dom';

let productList = [{ id: 1, name: 'dresses', price: 10, description: 'am dress' }, { id: 2, name: 'shoes', price: 5, description: 'am shoe' },
{ id: 3, name: 'accessories', price: 22, description: 'am accessories' }, { id: 4, name: 'trousers', price: 13, description: 'am trouser' },
{ id: 5, name: 'skirts', price: 3, description: 'am skirts' }]

let sortOptions = ["HighToLow", "LowToHigh"]

let checkBoxOptions = ["id", "name", "price", "description"]

class SortBy extends React.Component {

  state = { selectedSort: '' }

  getSort = (event) => {
    { this.setState({ selectedSort: event.target.value }) }
  }

  render() {
    let { sortOption } = this.props
    let { products } = this.props

    return (
      <div>
        <div>
          <select onChange={this.getSort}>
            {sortOption.map((sort) =>
              <option>{sort}</option>
            )}
          </select>
          <SortResultDisplay sortProducts={products} selectedSort={this.state.selectedSort} selectedCheckBox={this.state.labelname} />

        </div>
      </div>
    )
  }
}

class SortResultDisplay extends React.Component {
  render() {
    let { sortProducts } = this.props
    let { selectedSort } = this.props
    let { checkedBoxState } = this.props

    if (selectedSort == 'LowToHigh') {
      sortProducts.sort(function (a, b) { return (a.price) - (b.price); });
    }
    else if (selectedSort == 'HighToLow') {
      sortProducts.sort(function (a, b) { return (b.price) - (a.price); });
    }
    else {
      return null
    }

    return (
      <div>
        {sortProducts.map((sortProduct) =>
          <div>
            <p>{sortProduct.name}</p>
            <p>{sortProduct.price}</p>
            <p>{sortProduct.description}</p>
          </div>


        )}

      </div>
    )
  }
}


class CheckBox extends React.Component {

  state = { checkedBox: '', labelname: '' }


  getCheckBox = (event) => {
    { this.setState({ checkedBox: event.target.checked }) }
    { this.setState({ labelname: event.target.name }) }
  }
  render() {
    let { checkBoxes } = this.props

    return (
      <div>
        <div>
          {checkBoxes.map((check) =>
            <div>
              <input type="checkbox" name={check} onChange={this.getCheckBox} />
              <label>{check}</label>
            </div>
          )}
        </div>
        <CheckResult products={productList} checkedItem={this.state.labelname} />
      </div>
    )
  }
}

class CheckResult extends React.Component {
  render() {
    let { products } = this.props
    let { checkedItem } = this.props
    return (
      <div>
        {products.map((product) =>
          <div>{product[checkedItem]}</div>
        )}
      </div>

    )
  }
}

class DisplayElements extends React.Component {



  render() {

    return (
      <div>
        <SortBy sortOption={sortOptions} products={productList} />
        <CheckBox checkBoxes={checkBoxOptions} />

      </div>
    )
  }
}

ReactDOM.render(
  <DisplayElements />, document.getElementById('root')
)
