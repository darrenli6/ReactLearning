import React, { Component } from "react";

import "./css/01-index.css"

export default class App extends Component{
   // myref =React.createRef()

    // state={
    //     list : ["1"]
    // }
    state={
        list:[
            {id :1 ,mytext:"aaa"},
            {id :2 ,mytext:"bbb"},
        ],
        mytext:""
    }
    render(){
        return (
            <div>
                <input value={this.state.mytext} onChange={(evt)=>{
                    this.setState({
                        mytext:evt.target.value
                    })

                }} />
                <button onClick={this.handleClick2}>add2</button>  

                <ul>
                    {
                         this.state.list.map((item,index)=>
                            <li key={item.id}>
                                {/* {item.mytext} */}
                            {/* <button onClick={this.handleDel.bind(this,index)}>del</button> */}
                            {/* 富文本编辑*/}
                            <span dangerouslySetInnerHTML={
                                {
                                    __html:item.mytext
                                }
                            }></span>
                            <button onClick={()=>{
                                this.handleDel(index)
                            }}>del</button> 
                            </li>
                            )
                    }
                </ul>
                {/* {this.state.list.length===0?<div>暂无代办</div>:null} */}

                {
                //    this.state.list.length===0 && <div>暂无代办</div> 
                }

                <div className={this.state.list.length===0?'':"hidden"}>暂无代办</div>
            </div>
        )
    }

    handleClick2 = ()=>{
        // console.log("click2",this.myref.current.value)
        //不要直接修改状态，可能造成不可预期的问题
        /*

        this.state.list.push(this.myref.current.value)
        this.setState({
            list :this.state.list
        })
        
        */
       // 这是引用复制,不提倡
       /*
       let newlist =this.state.list
       newlist.push(this.myref.current.value)
       this.setState({
        list :newlist
       })
       */

       // 
       let newlist =[...this.state.list]
       newlist.push({
           id:Math.random()*100000000,  // 生成不同id的函数
           mytext:this.state.mytext
       })
       this.setState({
        list :newlist,
        mytext:""
       })

       //清空输入框
    //    this.myref.current.value=""
        
    }

    handleDel(index){
        console.log("del",index)
           //不要直接修改状态，可能造成不可预期的问题
           let newlist = this.state.list.concat()
           newlist.splice(index,1)
           this.setState({
               list:newlist
           })
    }
}