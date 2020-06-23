import React from 'react'

class DelayedButton extends React.Component{


    handleClick = (event) => {
        setTimeout(() => {
            this.props.onDelayedClick(event), this.props.delay
        }) 
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}

export default DelayedButton