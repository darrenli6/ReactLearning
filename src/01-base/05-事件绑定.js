import { Component } from "react";

export default class App extends Component{
    render() {
        return (
            <div>
                <input />
                {
                    // 匿名函数  
                }
                <button onClick={()=>{
                       console.log("click")
                }}>add1</button>
                {
                    //不需要加小括号  this.handleClick()
                }
               <button onClick={this.handleClick }>add2</button>
               <button onClick={this.handleClick3 }>add3</button>
               <button onClick={()=>{
                    this.handleClick4()
               } }>add4</button>
            </div>
        )
    }

    handleClick(){
        console.log("click2")
    }

    handleClick3= ()=>{
        console.log("click3")
    }
    handleClick4= ()=>{
        console.log("click4")
    }
}