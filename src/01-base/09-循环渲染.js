import { Component } from "react";

export default class  App extends Component{

    state ={
        list:[{
            id:1,
            text:"111"
        },
        {
            id:2,
            text:"222"
        } ,
        {
            id:3,
            text:"333"
        }
     ]
    }
    render(){
        // var newlist = this.state.list.map(item=><li>{item}</li>)
        return (
            <div>
                <ul>
                  
                     {
                        this.state.list.map((item,index)=><li key={item.id}>{item.text}---{index}</li>)
                     }
                </ul>
            </div>
        )
    }
}

/*
原生js  map方法

*/
var list =["aa","bb","cc"]
var newlist = list.map(item=>`<li>darren<li>`)
console.log(newlist.join(""))