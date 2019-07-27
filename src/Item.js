import React, { Component } from 'react';
import './App.css';


class Item extends Component{
    constructor(props) {
        super(props)
      }

render(){
    return <div className="summary__option" key={this.props.key}>
            <div className="summary__option__label">{this.props.key}  </div>
            <div className="summary__option__value">{this.state.selected[this.props.key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.state.selected[this.props.key].cost) }
            </div>
        </div>
}
}

export default Item