import { Component } from "react";

export default class App extends Component{
    a =100
    render() {
        return (
            <div>
                <input />
                {
                    // 匿名函数  
                }
                <button onClick={()=>{
                       console.log("click","如果逻辑过多，不建议推荐",this.a)
                }}>add1</button>
                {
                    //不需要加小括号  this.handleClick()
                }
               <button onClick={this.handleClick.bind(this) }>add2</button>
               <button onClick={this.handleClick3 }>add3</button>
               <button onClick={()=>{
                   // 箭头函数
                    this.handleClick4()
               } }>add4</button>
            </div>
        )
    }

    handleClick(){

        console.log("click2",this.a)
     
    }

    handleClick3= (evt)=>{
        console.log("click3",this.a,evt.target)
    }
    handleClick4= ()=>{
        console.log("click4",this.a)
    }
}


var obj1 = {
    name:"obj1",
    getName(){
        console.log(this.name)
    }
}

var obj2 = {
    name:"obj2",
    getName(){
        console.log(this.name)
    }
}

// obj1.getName()  obj1 
// 
//obj1.getName.call(obj2)  // 指向obj2
// obj1.getName.apply(obj2)  // 指向obj2 自动执行函数
obj1.getName.bind(obj2)()  // 不自动执行 如果自动执行 加（）
obj2.getName()