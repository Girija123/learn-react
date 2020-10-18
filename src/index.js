import React from 'react';
import ReactDOM from 'react-dom';

let checkBoxOption = ["id", "name", "description", "price", "image", "image-title"]

class CheckBoxDisplay extends React.Component {
  state = { product: [],checkedbox:false,labelName:'id' }
  componentDidMount() {
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(product => product.json())
      .then(product => this.setState({ product }))
  }

  getInput=(event)=>{
    {this.setState({checkedbox:event.target.checked})}
    //var labelItemName = document.getElementById('checkboxitem').innerHTML
    {this.setState({labelName:event.target.name})}
    
    
  }



  selectedBoxCheck=()=>{
    if(this.state.checkedbox){
      return this.state.product
    }
    else{
      return []
    }
  }

  render() {
    let { checkBoxes } = this.props
    return (
      <div>
        {checkBoxes.map(checkboxName =>
          <div>
            <input type="checkbox" id='checkinput' name={checkboxName} onChange={this.getInput}/>
            <label id='checkboxitem' name='options' >{checkboxName}</label>
          </div>
          

        )}
        <DisplayMatchedValue checkedValue={this.selectedBoxCheck()} checkItem={this.state.labelName} />

      </div>
    )
  }
}

class DisplayMatchedValue extends React.Component{
  
  render(){
    let {checkedValue}=this.props
    let {checkItem} = this.props
    return(
      <div>
      {checkedValue.map((content,i)=>
       
        <div>{content[checkItem]}</div>
      )}
      </div>
    )
  }
}

ReactDOM.render(
  <CheckBoxDisplay checkBoxes={checkBoxOption} />, document.getElementById('root')
)
