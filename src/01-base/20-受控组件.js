



import React, { Component } from "react";



export default class App extends Component{
   
    state={
        username:"kerwin"
    }
    render() {

        return (
            <div>
                <input type="text" value={this.state.username} onInput={()=>{
                    console.log("input")
                }} />
                <button onClick={()=>{
                    
                }}>登录</button>
                <button onClick={()=>{
                     
                }}>重置</button>
            </div>
        )
    }
}