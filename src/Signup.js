import { extend } from 'jquery'
import React from 'react'

class Signup extends React.Component { 
    render() {
    
    return (
        <form>
            <h1>Signup</h1>
            <div>
            <input type = "text" name="username" placeholder="username"/>
            <label htmlFor="username">Username</label>
            <br></br>
            <br></br>
            <input type="password" name="password" placeholder="Password"/>
            <label htmlFor="password" >Password</label>
            </div>
        </form>
    )}   
}

export default Signup