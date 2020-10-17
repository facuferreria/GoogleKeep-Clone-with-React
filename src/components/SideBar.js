import React, { Component } from 'react'


class SideBar extends Component {

    state = { activeBar: false }
    
    handleClick = () => {
        this.setState({ activeBar: !this.state.activeBar })
    }

    render() {
        return(
            <div className= {this.state.activeBar ? "bar-container open" : "bar-container"}>
                <div className= "burger-container" onClick= {this.handleClick}>
                    <div className= {this.state.activeBar ? "bar-burger open" : "bar-burger"}></div>
                </div>
                <div className= {this.state.activeBar ? "side-bar open" : "side-bar"}>
                    <p className= {this.state.activeBar ? "side-bar-text open" : "side-bar-text"}>Side Bar</p>
                </div>
            </div>
            
        )
    }
}

export default SideBar