import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props){
         super(props)
         this.state = {
             count:0
         }
     }
     increment()
     {
         //this.state.count = this.state.count +1
         //calls to set state are asynchronous ...hence make use of callbacks
         //react groups multiple setState calls into a single update call for better performance
        //  this.setState({
        //      count:this.state.count+1
        //  },()=>{
        //      console.log('callback value',this.state.count)
        //  })
        this.setState(prevState =>(
            {
                count:prevState.count + 1
            }
        ))
         console.log(this.state.count)
     }
     icrementFive()
     {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
     }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick = {()=>this.icrementFive()}>increment</button>
            </div>
        )
    }
}

export default Counter
