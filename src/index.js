import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const layout ={
  color: 'blue'
}

/*class Home extends React.Component {
  
  render(){
    return(
        <div className="App">
         <Header style ={layout}/>
         <Search />
        </div>
    )
  }

}

ReactDOM.render (
  <Home />, document.getElementById('root')
) */




class Search extends React.Component  {
  state = {

      products: ['Jeans','Dresses','TShirts','Shoes'],
      searchTerm: ''
  }

  getSearchTerm = (event)=> {
      this.setState({searchTerm: event.target.value})
  }

  dynamicSearch = () => {

        if (this.state.searchTerm.length===1)                     
        return this.state.products.filter(product =>product.toString().toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        else
        return [];        
        // return this.state.products.filter(product => (product.toLowerCase().indexOf()>-1))
  }
  
 
  render(){
      return (
          <div>
              <label id  = "searchLbl">Search For a product</label>
              <input type = "text" id  = 'searchFld'  placeholder='Search' className = '' onChange={this.getSearchTerm}/>
              <SearchResults searchResults = {this.dynamicSearch()}/>
                
              </div>
      )
  }

}


class SearchResults extends Component {



  render(){
    return(
      <div>
         {this.props.searchResults.map(result => <Result result = {result} />)}
      </div>
    )
  }

}

class Result extends Component {
  render()
  {
    return(
    <div>{this.props.result}</div>
    )
  }
}

ReactDOM.render (
  <Search />, document.getElementById('root')
) 