import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: true
         }
     }
     
    render() {

        return this.state.isLoggedIn && <div> Welcome Anurag</div>

        // return (
        //     this.state.isLoggedIn ?<div> Welcome Anurag</div>:<div>Welcome Guest</div>
        // )
        // let message
        // if(this.state.isLoggedIn)
        // {
        //     message = <div>Welcome Anurag</div>
        // }else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // if(this.state.isLoggedIn)
        // {
        //     return<div>Welcome Anurag</div>
        // }else {
        //     return <div>Welcome Guest</div>
        // }
        //if else does not work in jsx
        // return (
        //     <div>
        //         <div>Welcome Anurag</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
