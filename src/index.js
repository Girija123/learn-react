import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';



/*class Search extends React.Component {



  state = { products: ["dresses", "shoes", "accessories", "jewellery"], searchTerm: '' }

  getInput = (event) => {
    { this.setState({ searchTerm: event.target.value }) }
  }

  findSearch = () => {
    if(this.state.searchTerm.length>=1)
    return this.state.products.filter(product => (product.toLowerCase()).includes(this.state.searchTerm.toLowerCase()))
    else
    return[]

  }

  render() {
    return (
      <div>
        <label id='searchf'>Search</label>
        <input type='text' id='searchInput' onChange={this.getInput}></input>
        <ReturnSearch results={this.findSearch()} />

      </div>
    )
  }
}

class ReturnSearch extends React.Component {
  render() {
    return (
      <div>
        {this.props.results.map(searchResult => 
          <div>{searchResult}</div>

        )}
      </div>
      )
  }
}


render(
  <Search />, document.getElementById('root')

)*/

let sortOptions=["HighToLow","LowToHigh"]

class SortBy extends React.Component{
  state={price:[45,12,67,33,34,89,9],selectOption:''}

  changeOption=(event)=>{
    this.setState({selectOption:event.target.value})
  }

  displaySort=()=>{
     if(this.state.selectOption==="LowToHigh"){
      return this.state.price.sort(function(a,b){return a-b})
     }
     else if(this.state.selectOption===""){
       return []

    }
     else{
       return this.state.price.sort(function(a,b){return b-a})
     }
     

  }
 
  render(){
    const {sort}=this.props
    return(
      <div>
      <select onChange={this.changeOption}>
        <option selected hidden>select option</option>
        {sort.map(sortOpt=>
        <option>{sortOpt}</option>
        )}
      </select>
      <DisplaySortResult result={this.displaySort()}/>
      </div>
    )
  }

}

class DisplaySortResult extends React.Component{
  render(){
    return(
      <div>
      {this.props.result.map(priceOrder=>
      <div>{priceOrder}</div>
      )}
      </div>
    )
  }
}

ReactDOM.render(
  <SortBy sort={sortOptions}/>,document.getElementById('root')
)