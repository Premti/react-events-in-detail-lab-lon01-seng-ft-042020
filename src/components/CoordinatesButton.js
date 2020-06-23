import React from 'react'

class CoordinatesButton extends React.Component{

    handleClick = (event) => {
        const coordinatesArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinatesArray)
    }


    render(){
        return(
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default CoordinatesButton