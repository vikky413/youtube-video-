import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         search:""
      }
    }
    SubmitSearch = (event) =>{
        event.preventDefault();
        this.props.inputuser(this.state.search)
    }

  render() {
    return (
      <div className='container'>
       <form onSubmit={this.SubmitSearch}>
       <input 
        placeholder='Search here'
        value={this.state.search}
        onChange = {(e)=> this.setState({search:e.target.value})}
        />
       </form>
      </div>
    )
  }
}
