import { Component } from "react";
import BScroll from "better-scroll";

export default class App extends Component{
    state= {
        list:[]
    }
    render(){
        return (<div>
            <button onClick={()=>this.getData()}>click </button>
            <div className="wrapper" style={{height:'200px',background:'yellow',overflow:'hidden'}} >
                <ul className="content" >
                    { this.state.list.map(item=>
                    <li key={item}>{item}</li>
                        )}
                    <li></li>
                </ul>
            </div>
        </div>)
    }

    getData(){
        var list = [1,2,3,4,5,6,4,4,3,5,6,5,6,5,67,5,645,6]
        // 同步更新
        // this.setState({
        //     list:list
        // },()=>{
        //     console.log(this.state.list)
        //     console.log(document.querySelectorAll('li'))
        //     new BScroll(".wrapper")
        // })

        // 异步更新
        setTimeout(()=>{

              this.setState({
                  list:list
              })

              console.log(this.state.list)
              console.log(document.querySelectorAll('li'))
              new BScroll(".wrapper")
        },0)

      
    }
}