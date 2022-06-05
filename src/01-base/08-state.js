

import React, { Component } from "react";

export default class App extends Component{


    constructor(){
       super()
       this.state= {
        mytext:"收藏",
        show:true,
        myname:"darren"
       }
    }
    // a =1 
    // state={
    //     mytext:"收藏",
    //     show:true
    // }
    render(){
        var text="收藏"
        return (
            <div>
              <h1>欢迎 {this.state.myname}</h1>
              <button onClick={()=>{
                //   this.state.mytext="取消收藏"   // 不要直接修改
                //   this.setState({
                //       mytext:"取消收藏"  
                //   })  // 间接修改

                this.setState({
                    show:!this.state.show,
                    myname : "小米"
                })

              }}>{this.state.show?"收藏":"取消收藏"}</button>
            </div>
        )
    }
}