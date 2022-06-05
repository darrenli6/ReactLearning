import React, { Component } from "react";

export default class App extends Component{
    a =100
    myref= React.createRef()
    render() {
        return (
            <div>
                {/* <input ref="mytest1" /> */}
                <input ref={this.myref} />
                {
                    // 匿名函数  
                }
                <button onClick={()=>{
                    //    console.log("click",this.refs.mytest1.value)
                    console.log('click',this.myref.current.value)

                }}>add1</button>

                <button onClick={this.handleClick2}>add2</button>


                
            </div>
        )
    }

    handleClick2 = ()=>{
        console.log("click2",this.myref.current.value)
    }

  
}


 