import { Component } from "react";


export default class App extends Component{

    state= {
        count :1 
    }
    render(){

        return (<div>
              {this.state.count}
              <button onClick={this.handleAdd1}>add1</button>
              <button onClick={this.handleAdd2}>add1</button>
        </div>)
    }

    handleAdd1= ()=>{
        // 看出是否同步执行或者异步执行  面试题 

         this.setState({
             count:this.state.count+1
         },()=>{
            console.log(this.state.count)
         })

       
         this.setState({
            count:this.state.count+1
        },()=>{
            console.log(this.state.count)
        })
        
        this.setState({
            count:this.state.count+1
        },()=>{
  // setState 异步更新状态 
  console.log(this.state.count)
        })
     

    }

    handleAdd2=()=>{
        // 同步更新状态 
        // setState 处于在同步的逻辑中，异步更新状态
        // setState 处在异步逻辑中，同步更新状态
        setTimeout(()=>{

         this.setState({
            count:this.state.count+1
        })

        console.log(this.state.count)
        this.setState({
           count:this.state.count+1
       })
       console.log(this.state.count)
       this.setState({
           count:this.state.count+1
       })
        // setState 异步更新状态 
       console.log(this.state.count)
        },0)
    }
}