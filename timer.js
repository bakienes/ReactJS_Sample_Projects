import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sayac:0
        }
    }
    componentDidMount(){
        this.myTimer = setInterval(()=>{
            this.setState(prevstate=>({
                sayac:prevstate.sayac + 1
            }))
        }, 1000 )
        
    }
    componentWillUnmount(){
        clearInterval(this.myTimer)
    }

    
    render() {
        return (
            <div>
              {this.state.sayac}  
            </div>
        )
    }
}
