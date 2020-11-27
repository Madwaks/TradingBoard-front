import React from 'react'
import "./space.css"

class POPOSSpace extends React.Component{
    constructor(props) {
        super(props);
        this.state =
            {
                name: props.name,
                image: props.image,
                address: props.address,
            }
    }
    render() {
      return (
            <div>
                <img src={`${process.env.PUBLIC_URL}/images/${this.state.image}`} width="300" height="300" alt="50 Califonia St."/>
                <h1>{this.state.name}</h1>
                <div className="address">{this.state.address}</div>
            </div>
        )
    }
}

export default POPOSSpace